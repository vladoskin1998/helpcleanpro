import React from "react"

export const Input = ({
    placeholder,
    value,
    setValue,
    validation=true,
}: {
    placeholder: string
    value: string
    setValue: (s: string) => void
    validation?:boolean
}) => {
    return (
        <div className="field">
            <input
                type="text"
                required
                autoComplete="off"
                name={placeholder}
                id={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`${!validation && "field-red-border"}`}
            />
            <label
                htmlFor={placeholder}
                title={placeholder}
                data-title={placeholder}
            ></label>
        </div>
    )
}
