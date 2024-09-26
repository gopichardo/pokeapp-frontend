import { Button } from "../Buttons/Button"


export const Index = () => {

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
