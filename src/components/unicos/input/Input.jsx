import "./Input.css";
function Input({ label, type="text", id, placeholder, value }) {

    return (
        <>
            <div className="input_caixa">
                <label htmlFor={id}> {label} </label>
                <input type={type} name={id} id={id} placeholder={placeholder}  value={value} />
            </div>
        </>
    )
}
export default Input;