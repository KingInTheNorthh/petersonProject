'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col"
    >
      {/* Close button */}
      <div className="absolute top-6 right-6 pt-6">
        <button 
          onClick={onClose}
          className="text-slate-300 hover:text-zinc-100 transition-colors duration-200 p-2"
          aria-label="Close menu"
        >
          <div className="w-8 h-8 flex flex-col justify-center items-center">
            <span className="block w-8 h-0.5 bg-current rotate-45 translate-y-0.5"></span>
            <span className="block w-8 h-0.5 bg-current -rotate-45 -translate-y-0.5"></span>
          </div>
        </button>
      </div>

      {/* Menu content */}
      <nav className="flex-1 flex items-center justify-center px-8">
        <div className="flex flex-col gap-8 items-start font-[family-name:var(--font-jersey)]">
          <Link 
            href="/staff"
            onClick={onClose}
            className="text-5xl text-slate-300 hover:text-zinc-100 transition-colors duration-200 flex items-center gap-4"
          >
            <span className="text-cyan-400">{'>'}</span>
            Staff
          </Link>
          <Link 
            href="/events"
            onClick={onClose}
            className="text-5xl text-slate-300 hover:text-zinc-100 transition-colors duration-200 flex items-center gap-4"
          >
            <span className="text-cyan-400">{'>'}</span>
            Events
          </Link>
          <Link 
            href="/startup-battlefield"
            onClick={onClose}
            className="text-5xl text-slate-300 hover:text-zinc-100 transition-colors duration-200 flex items-center gap-4"
          >
            <span className="text-cyan-400">{'>'}</span>
            Startup Battlefield
          </Link>
          <Link 
            href="/open-source-gold"
            onClick={onClose}
            className="text-5xl text-slate-300 hover:text-zinc-100 transition-colors duration-200 flex items-center gap-4"
          >
            <span className="text-cyan-400">{'>'}</span>
            Open Source Gold
          </Link>
          <Link 
            href="/merchandise"
            onClick={onClose}
            className="text-5xl text-slate-300 hover:text-zinc-100 transition-colors duration-200 flex items-center gap-4"
          >
            <span className="text-cyan-400">{'>'}</span>
            Merchandise
          </Link>
          <Link 
            href="/contact"
            onClick={onClose}
            className="text-5xl text-slate-300 hover:text-zinc-100 transition-colors duration-200 flex items-center gap-4"
          >
            <span className="text-cyan-400">{'>'}</span>
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}
