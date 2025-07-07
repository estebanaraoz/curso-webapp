import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'min-w-[8rem] px-4 py-2 rounded text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary'
  const styles = variant === 'primary'
    ? 'bg-primary text-white hover:bg-primary-dark'
    : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
  const disabledStyles = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  return <button className={`${base} ${styles} ${disabledStyles} ${className}`} {...props} />
}
