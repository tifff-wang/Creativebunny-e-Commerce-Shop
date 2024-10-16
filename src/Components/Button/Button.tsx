import React from 'react'
import './Button.styles.scss'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface buttonProps extends ComponentPropsWithoutRef<'button'> {
    children: string | ReactNode
    buttonType: 'google' | 'inverted' | 'default' | 'passkey'
}

const buttonClassName = {
    google: 'google-button',
    inverted: 'inverted-button',
    default: 'default-button',
    passkey: 'passkey-button',
}

const Button = ({ children, buttonType, ...rest }: buttonProps) => {
    return (
        <button
            className={`button-container ${buttonClassName[buttonType]}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
