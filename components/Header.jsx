
import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Bell } from 'lucide-react'
import { User } from 'lucide-react'

const Header = () => {
  return (
    <header className=' py-5 border-b bg-primary'>
      <div className='mx-auto max-w-7xl flex justify-between text-primary-foreground'>
        <h2 className='text-2xl font-bold'>Cinema</h2>
        <nav className='flex gap-8'>
          <Link href={"/"}>Home</Link>
          <Link href={"movies"}>Movies</Link>
          <Link href={"#watchlist"}>Watchlist</Link>
          <Link href={"#favorites"}>Favorites</Link>
        </nav>
        <div className='flex gap-8'>
          <Input placeholder="Search" />
          <Bell />
          <User/>
        </div>


      </div>
    </header>
  )
}

export default Header