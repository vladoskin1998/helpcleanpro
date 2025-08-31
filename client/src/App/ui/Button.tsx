import { ReactElement } from "react"

export const Button = ({
    icon,
    text,
    onClick,
    disabled=false
}: {
    icon: ReactElement
    text: string
    onClick: () => void
    disabled?: boolean
}) => {
    return (
        <button className="ui-button" onClick={onClick}>
            <div className="ui-button-circle"/>
            <div className="flex-all-center ui-button-icon">{icon}</div>
            <div className="ui-button-text">{text}</div>
        </button>
    )
}
