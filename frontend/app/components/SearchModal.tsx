'use client';

import { useEffect, useRef } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

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
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="max-w-3xl mx-auto pt-32 px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0a0a0a] border border-zinc-500 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-6 h-6 text-slate-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search articles, news, podcasts..."
              className="flex-1 bg-transparent text-zinc-200 text-xl placeholder-zinc-500 outline-none font-[family-name:var(--font-jersey)]"
            />
            <button
              onClick={onClose}
              className="text-zinc-500 hover:text-zinc-300 transition-colors font-[family-name:var(--font-jersey)]"
            >
              ESC
            </button>
          </div>

          <div className="border-t border-zinc-800 pt-4">
            <p className="text-zinc-500 text-sm font-[family-name:var(--font-jersey)]">
              Start typing to search...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
