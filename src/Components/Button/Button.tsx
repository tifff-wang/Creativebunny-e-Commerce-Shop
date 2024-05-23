import React from 'react'
import "./Button.styles.scss"
import type { ComponentPropsWithoutRef} from 'react'

interface buttonProps extends ComponentPropsWithoutRef<'button'> {
    children: string
    buttonType: 'google' | 'inverted' | "default"
}

const buttonClassName = {
  google: "google-button",
  inverted: "inverted-button",
  default: "default-button"
}

const Button = ({children, buttonType, ...rest }:buttonProps) => {
  return (
      <button className={`button-container ${buttonClassName[buttonType]}`} {...rest}>
          {children}
      </button>
  )
}

export default Button