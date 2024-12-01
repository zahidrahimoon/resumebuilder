import Footer from '@/components/custom/Footer'
import Header from '@/components/custom/Header'
import HeroSection from '@/components/custom/HeroSection'
import HowItWorks from '@/components/custom/HowItWorks'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <HowItWorks />
      </main>
    </div>
  )
}

export default Home