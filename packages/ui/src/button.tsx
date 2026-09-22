import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({ variant = 'primary', className = '', ...props }: Props) {
  const styles = {
    primary: 'bg-gradient-to-r from-nirman-orange to-nirman-gold text-white shadow-lg shadow-orange-200/40',
    secondary: 'bg-white/10 text-white border border-white/20',
    ghost: 'bg-white text-nirman-navy border border-slate-200'
  };
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-bold transition hover:-translate-y-0.5 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
