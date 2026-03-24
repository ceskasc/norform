import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-widest uppercase transition-colors duration-500 ease-slow relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-brand-stoneBlack text-brand-warmWhite hover:bg-brand-softCharcoal',
    secondary: 'bg-brand-stone text-brand-stoneBlack hover:bg-brand-sand',
    outline: 'border border-brand-stoneBlack text-brand-stoneBlack hover:bg-brand-stoneBlack hover:text-brand-warmWhite',
    ghost: 'text-brand-stoneBlack hover:text-brand-softOlive',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-xs px-8 py-4',
    lg: 'text-sm px-12 py-5',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'outline' && (
        <span className="absolute inset-0 bg-brand-stoneBlack transform scale-x-0 origin-left transition-transform duration-500 ease-luxury group-hover:scale-x-100 z-0"></span>
      )}
    </motion.button>
  );
}
