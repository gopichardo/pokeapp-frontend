import { Button } from "../../components/Buttons/StartButton"


export const PokeAppPage = () => {

    const handleClickStart = () => {
        alert('Start');
    }

    return (
        <>
            Pokemon
            <Button text="Start" handleClick={handleClickStart} />
        </>
    )
}
