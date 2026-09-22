import * as React from 'react';
export function SectionEyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-3 text-xs font-extrabold uppercase tracking-[.2em] ${light ? 'text-white/70' : 'text-nirman-gold'}`}>{children}</p>;
}
