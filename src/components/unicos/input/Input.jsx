import "./Input.css";

function Input({ label, type = "text", id, placeholder, value, maxDigitos, onChange }) {
    const handleInput = (e) => {
        let val = e.target.value;
        if (maxDigitos) {
            val = val.replace(/\D/g, "").slice(0, maxDigitos);
            e.target.value = val;
        }
        if (onChange) onChange(e);
    };

    return (
        <div className="input_caixa">
            <label htmlFor={id}> {label} </label>
            <input
                type={type === "number" || maxDigitos ? "text" : type}
                name={id}
                id={id}
                placeholder={placeholder}
                maxLength={maxDigitos}
                inputMode={maxDigitos ? "numeric" : undefined}
                onInput={handleInput}
                defaultValue={value}
            />
        </div>
    );
}

export default Input;
