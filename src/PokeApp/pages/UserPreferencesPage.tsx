import { Alert, Button, Collapse, Divider, IconButton, Stack, Typography } from "@mui/material"
import { UserStep } from "../../auth/pages/register-steps/UserStep"
import { PokeAppLayout } from "../layout/PokeAppLayout"
import { LocationStep } from "../../auth/pages/register-steps/LocationStep"
import { PokemonSelectionStep } from "../../auth/pages/register-steps/PokemonSelectionStep"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useRef, useState } from "react";
import { IUserStepRef } from "../../auth/types/user-step-ref.interface";
import { useSavePreferencesLocalStorage } from "../../hooks/useSavePreferencesLocalStorage"
import CloseIcon from '@mui/icons-material/Close';


export const UserPreferencesPage = () => {
  useSavePreferencesLocalStorage();

  const userRef = useRef<IUserStepRef>(null);
  const locationRef = useRef<IUserStepRef>(null);
  const pokemonRef = useRef<IUserStepRef>(null);


  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openValidationAlert, setopenValidationAlert] = useState(false);


  const onClickSaveButton = () => {

    const userValid = userRef.current?.validateStep();
    const locationValid = locationRef.current?.validateStep();
    const pokemonValid = pokemonRef.current?.validateStep();

    if (userValid && locationValid && pokemonValid) {
      setopenValidationAlert(false);
      setOpenSuccessAlert(true);
    }
    else {
      setopenValidationAlert(true);
      setOpenSuccessAlert(false);
    }
  }

  return (
    <PokeAppLayout>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        You can modify your Preferences
      </Typography>
      <Stack sx={{ mb: 2 }} spacing={2}>
        <Divider orientation="horizontal" flexItem >User Information</Divider>
        <UserStep ref={userRef} />
        <Divider orientation="horizontal" flexItem>Location</Divider>
        <LocationStep ref={locationRef} />
        <PokemonSelectionStep ref={pokemonRef} />
        <Collapse in={openSuccessAlert}>
          <Alert
            variant="standard"
            severity="success"
            action={
              <Button size="small" color="inherit" variant="text" href="/home">
                Go Home
              </Button>
            }
          >
            Preferences saved successfully
          </Alert>
        </Collapse>
        <Collapse in={openValidationAlert}>
          <Alert
            variant="standard"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="medium"
                onClick={() => {
                  setopenValidationAlert(false);
                }}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }>
            Some sections are not valid
          </Alert>
        </Collapse>
        <Button
          endIcon={<SaveOutlinedIcon />}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={onClickSaveButton}
        >
          Save
        </Button>
      </Stack>
    </PokeAppLayout>
  )
}
