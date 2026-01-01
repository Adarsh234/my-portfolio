import { cn } from '@/utils/cn'
import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}
