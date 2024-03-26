import React from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import "./FormInput.styles.scss"

interface InputGroupProps extends ComponentPropsWithoutRef<'input'> {
    label: string
}
const FormInput = ({ label, ...rest }: InputGroupProps) => {
    return (
        <div className="input-container">
            <input className="form-input" {...rest} />
            {label && (
                <label
                    className={`${
                        rest.value? 'shrink' : ''
                    } input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    )
}

export default FormInput
