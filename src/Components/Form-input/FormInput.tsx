import React from 'react'

interface FormInputProps {
    label: string
}

const FormInput = (props: FormInputProps) => {
    const { label, ...otherProps } = props
    return (
        <div>
            <label>{label}</label>
            <input {...otherProps} />
        </div>
    )
}

export default FormInput
