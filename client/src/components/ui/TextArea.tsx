export const TextArea = ({
    placeholder,
    value,
    setValue,
    validation=true
}: {
    placeholder: string
    value: string
    setValue: (s: string) => void
    validation?:boolean
}) => {
    return (
        <div className="ui-textarea">
            <textarea
                required
                autoComplete="off"
                name={placeholder}
                id={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`${!validation && "field-red-border"}`}
            ></textarea>
            <label
                htmlFor={placeholder}
                title={placeholder}
                data-title={placeholder}
            ></label>
        </div>
    )
}