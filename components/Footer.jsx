
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { WholeWord } from 'lucide-react'
import { Video } from 'lucide-react'
import { Share2 } from 'lucide-react'
import { Earth } from 'lucide-react'
import { Copyright } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    

 <footer className="bg-primary py-8">
      <section className="flex flex-col max-w-6xl mx-auto text-primary-foreground">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="font-semibold text-xl">Cinema</h1>
            <p>The ultimate destination for <br /> cinephiles. Discover the world&apos;s best <br /> movies and TV shows in stunning 4K <br /> quality.</p>
          </div>
          <div>
            <h1 className="font-semibold text-xl">CONTENT</h1>
            <ul>
              <li>Movies</li>
              <li>Series</li>
              <li>Documentaries</li>
              <li>New Releases</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Support</h1>
            <ul>
              <li>Help Center</li>
              <li>Devices</li>
              <li>Account</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Social</h1>
            <div className="flex flex-row justify-between gap-3">
              <Mail />
              <Earth/>
              <Video/>
              <Share2/>
              

            </div>
          </div>

        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between gap-2">
            <Copyright /> <p>Aso Fashion. All rights reserved.</p>
          </div>
          <div className="flex flex-row justify-between gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer