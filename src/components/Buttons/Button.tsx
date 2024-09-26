export const Button = ({ text = 'Button', icon = '', handleClick }: ButtonProps) => {
    return (
        <button onClick={handleClick}>
            {text}{icon ?? ' ' + icon}
        </button>
    )
}


export type ButtonProps = {
    text: string,
    icon?: string,
    handleClick?: () => void
}