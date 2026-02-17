'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ContentCardProps {
  size: 'large' | 'small';
  className?: string;
  imageSrc?: string;
  headline?: string;
  hoverText?: string;
  href?: string;
}

export default function ContentCard({ 
  size, 
  className = '',
  imageSrc,
  headline,
  hoverText,
  href
}: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative border-2 border-cyan-400 overflow-hidden cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background image */}
      {imageSrc && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageSrc}
            alt={headline || ''}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Cyan overlay animation */}
      <motion.div
        className="absolute inset-0 bg-cyan-400 z-10"
        initial={{ opacity: 0 }}
        animate={isHovered ? { 
          opacity: [0, 0.15, 0.08],
        } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Content container */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end">
        {/* Bottom headline with link - always visible */}
        {headline && href && (
          <div className="p-8 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
            <Link href={href}>
              <h2 className={`font-[family-name:var(--font-jersey)] text-zinc-100 underline decoration-2 underline-offset-4 hover:text-cyan-400 transition-colors ${
                size === 'large' ? 'text-6xl' : 'text-3xl'
              }`}>
                {headline}
              </h2>
            </Link>
          </div>
        )}
      </div>

      {/* Border glow effect on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-cyan-400 pointer-events-none z-30"
        animate={isHovered ? {
          boxShadow: [
            '0 0 0px rgba(34, 211, 238, 0)',
            '0 0 20px rgba(34, 211, 238, 0.6)',
            '0 0 10px rgba(34, 211, 238, 0.4)',
          ]
        } : {
          boxShadow: '0 0 0px rgba(34, 211, 238, 0)'
        }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
}
