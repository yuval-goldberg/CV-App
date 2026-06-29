import { useState } from "react"

function FormInput({ placeholder, label, icon, type, what = 'text', value, onChange }) {
    return (
        <div className="formInput">
            <label className="inputLabel" id={label}>{label}</label>
            <div className="inputWrapper">
                {icon && <span className="inputIcon">{icon}</span>}
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={type}
                    type={what}
                />
            </div>
        </div>
    )
}

export default FormInput