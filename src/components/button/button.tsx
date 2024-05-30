import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'
type PropsButton<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  as,
  className,
  fullWidth,
  variant = 'primary',
  ...rest
}: PropsButton<T>) => {
  const Component = as ?? 'button'

  return (
    <Component
      className={`${s.baseButton} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className} `}
      {...rest}
    />
  )
}
