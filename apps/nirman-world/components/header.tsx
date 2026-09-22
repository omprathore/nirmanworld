'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './logo';
import { Button } from '@nirman/ui';

const links = ['Services','How It Works','Project Journey','For Businesses','Projects','About'];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="container-nirman flex min-h-[78px] items-center justify-between gap-6">
        <a href="#"><Logo /></a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase().replaceAll(' ','-')}`} className="text-sm font-semibold text-slate-700 hover:text-nirman-navy">{link}</a>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="#login" className="text-sm font-semibold text-slate-700">Login</a>
          <a href="#start"><Button>Start a Project</Button></a>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && (
        <div className="container-nirman pb-5 lg:hidden">
          <div className="card flex flex-col gap-1 p-3">
            {links.map((link) => <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase().replaceAll(' ','-')}`} className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-50">{link}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}
