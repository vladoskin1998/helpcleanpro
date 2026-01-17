import React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string
    setValue: (s: string) => void
    validation?: boolean
}

export const Input: React.FC<InputProps> = ({
    value,
    setValue,
    validation = true,
    ...rest
}) => {
    return (
        <div className="field">
            <input
                {...rest}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`${!validation && "field-red-border"}`}
            />
            <label
                htmlFor={rest.id || rest.name}
                title={rest.placeholder}
                data-title={rest.placeholder}
            ></label>
        </div>
    )
}