import type { ButtonHTMLAttributes, ReactNode } from 'react'
import {
  badge,
  badgeVariants,
  buttonBase,
  buttonSizes,
  buttonVariants,
  card,
  cardTitle,
} from './components.css'

export type ButtonVariant = keyof typeof buttonVariants
export type ButtonSize = keyof typeof buttonSizes
export type BadgeVariant = keyof typeof badgeVariants

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  variant = 'primary',
  size = 'small',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[buttonBase, buttonVariants[variant], buttonSizes[size], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}

export function Card({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className={card}>
      <h2 className={cardTitle}>{title}</h2>
      {children}
    </section>
  )
}

export function Badge({
  variant,
  children,
}: {
  variant: BadgeVariant
  children: ReactNode
}) {
  return <span className={`${badge} ${badgeVariants[variant]}`}>{children}</span>
}
