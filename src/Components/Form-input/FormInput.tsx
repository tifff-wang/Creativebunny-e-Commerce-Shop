import React from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import "./FormInput.styles.scss"

interface InputGroupProps extends ComponentPropsWithoutRef<'input'> {
    label: string
}
const FormInput = ({ label, id, ...rest }: InputGroupProps) => {
    return (
        <div className="input-container">
            {label && (
                <label
                    htmlFor={id}
                    className={`${rest.value ? 'shrink' : ''} input-label`}
                >
                    {label}
                </label>
            )}
            <input id = {id} className="form-input" {...rest} />
        </div>
    )
}

export default FormInput
