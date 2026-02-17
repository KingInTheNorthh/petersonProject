'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import SearchModal from './SearchModal';
import MobileMenu from './MobileMenu';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center px-4 py-2.5 text-2xl text-slate-300 hover:text-zinc-100 transition-colors duration-200 group"
    >
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="200"
          strokeDashoffset="0"
          className="text-zinc-500"
          style={{
            animation: 'borderDash 8s linear infinite'
          }}
        />
      </svg>
    </Link>
  );
}

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm pt-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center text-zinc-200 hover:text-zinc-100 transition-colors">
            <Logo />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 font-[family-name:var(--font-jersey)]">
            <NavItem href="/news">News</NavItem>
            <NavItem href="/articles">Articles</NavItem>
            <NavItem href="/latest">Latest</NavItem>
            <NavItem href="/podcasts">Podcasts</NavItem>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-300 hover:text-zinc-100 transition-colors duration-200 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-zinc-100 transition-colors duration-200 ml-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
