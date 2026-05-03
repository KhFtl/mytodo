import 'react';

function Input({ value, onChange, placeholder, type = "text", className = "", ...props }) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`custom-input ${className}`}
            {...props}
        />
    );
}

export default Input;
