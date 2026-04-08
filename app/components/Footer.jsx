import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDark }) => {
  return (
    <footer className='mt-16 py-4'>

      {/* Top Section */}
      <div className='text-center'>
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt='Narayan Logo'
          className='w-36 mx-auto mb-4'
        />

        <div className='flex items-center justify-center gap-2 text-gray-600 dark:text-white/70'>
          <Image
            src={isDark ? assets.mail_icon_dark : assets.mail_icon}
            alt='Mail Icon'
            className='w-5'
          />
          <a
            href='mailto:narayanphukan30@gmail.com'
            className='hover:text-accent transition-colors duration-300'
          >
            narayanphukan30@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-200 dark:border-white/10 mx-[10%] mt-10 py-6 text-sm text-gray-500 dark:text-white/50'>

        <p>&copy; 2026 Narayan Phukan. All rights reserved.</p>

        <ul className='flex items-center gap-8 justify-center mt-4 sm:mt-0'>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/NarayanPhukan'
              className='hover:text-accent transition-colors duration-300'
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/narayan-phukan'
              className='hover:text-accent transition-colors duration-300'
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/narayn.phukan/'
              className='hover:text-accent transition-colors duration-300'
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer