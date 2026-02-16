'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm pt-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center text-zinc-200 hover:text-zinc-100 transition-colors">
            <Logo />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 font-[family-name:var(--font-jersey)]">
            <Link 
              href="/news" 
              className="text-slate-300 hover:text-zinc-100 transition-colors duration-200"
            >
              News
            </Link>
            <Link 
              href="/articles" 
              className="text-slate-300 hover:text-zinc-100 transition-colors duration-200"
            >
              Articles
            </Link>
            <Link 
              href="/latest" 
              className="text-slate-300 hover:text-zinc-100 transition-colors duration-200"
            >
              Latest
            </Link>
            <Link 
              href="/podcasts" 
              className="text-slate-300 hover:text-zinc-100 transition-colors duration-200"
            >
              Podcasts
            </Link>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-300 hover:text-zinc-100 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
