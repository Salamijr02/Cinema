"use client"

import Link from 'next/link'
import { Mail, Earth, Video, Share2, Instagram, Twitter } from 'lucide-react'
import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h1 className="font-bebas text-2xl tracking-[0.2em] text-gold mb-4">Sinimá</h1>
            <p className="font-dm text-sm leading-relaxed"
              style={{ color: 'rgba(242,234,216,0.55)' }}>
              The ultimate destination for cinephiles. Discover the world&apos;s best
              movies and TV shows in stunning 4K quality.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {[Mail, Earth, Video, Share2, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#"
                  className="transition-colors duration-300"
                  style={{ color: 'rgba(201,168,76,0.5)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(201,168,76,0.5)'}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Content links */}
          <div>
            <h3 className="font-bebas tracking-[0.18em] text-sm mb-5 text-gold">Content</h3>
            <ul className="space-y-3">
              {[
                { label: 'Movies',        href: '/movies' },
                { label: 'Documentaries', href: '/movies' },
                { label: 'Short Films',   href: '/movies' },
                { label: 'New Releases',  href: '/movies' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}
                    className="font-dm text-sm transition-colors duration-300 no-underline"
                    style={{ color: 'rgba(242,234,216,0.5)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,234,216,0.5)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Lists */}
          <div>
            <h3 className="font-bebas tracking-[0.18em] text-sm mb-5 text-gold">My Lists</h3>
            <ul className="space-y-3">
              {[
                { label: 'Favorites',  href: '/favorites' },
                { label: 'Watchlist',  href: '/watchlist' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}
                    className="font-dm text-sm transition-colors duration-300 no-underline"
                    style={{ color: 'rgba(242,234,216,0.5)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,234,216,0.5)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bebas tracking-[0.18em] text-sm mb-5 text-gold">Support</h3>
            <ul className="space-y-3">
              {[
                { label: 'Help Center', href: '#' },
                { label: 'Devices',     href: '#' },
                { label: 'Account',     href: '#' },
                { label: 'Contact Us',  href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}
                    className="font-dm text-sm transition-colors duration-300 no-underline"
                    style={{ color: 'rgba(242,234,216,0.5)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,234,216,0.5)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ background: 'rgba(201,168,76,0.15)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-dm text-xs"
            style={{ color: 'rgba(242,234,216,0.35)' }}>
            <Copyright size={12} />
            <span>2025 Sinimá. All rights reserved.</span>
          </div>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a key={label} href="#"
                className="font-dm text-xs no-underline transition-colors duration-300"
                style={{ color: 'rgba(242,234,216,0.35)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,234,216,0.35)'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer