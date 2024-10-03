import { FormControl, Switch } from "@mui/material";
import { useState } from "react";

export const LocationStep = () => {
    const [allowLocationChecked, setAllowLocationChecked] = useState(false);

    const handleOnCheckAllowLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAllowLocationChecked(event.target.checked);
    }

    return (
        <>
            <p>Allow app to access your location</p>

            <FormControl>
                <Switch
                    checked={allowLocationChecked}
                    onChange={handleOnCheckAllowLocation}
                    inputProps={{ 'aria-label': 'controlled' }}
                >
                </Switch>
            </FormControl>

        </>
    )
}
