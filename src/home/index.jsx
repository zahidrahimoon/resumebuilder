import Footer from '@/components/custom/Footer'
import Header from '@/components/custom/Header'
import HowItWorks from '@/components/custom/HowItWorks'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div>
      <Header/>
      <div>
     <section className=" z-5">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="https://github.com/zahidraimoon" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300" role="alert">
            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Zahid Rahimoon All new Apps</span> 
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 hover:rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Build Your Resume <span className='text-primary'>With AI</span> </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Effortlessly Craft a Standout Resume with Our AI-Powered Builder</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition-transform duration-300 hover:scale-105">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="/path/to/your/resume.pdf" download className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-transform duration-300 hover:scale-105">
                <svg className="mr-2 -ml-1 w-5 h-5 transition-transform duration-300 hover:rotate-45" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.5l-4-4h3V3h2v8.5h3l-4 4z"/>
                    <path d="M4 20h16v2H4v-2z"/>
                </svg>
                My Resume
            </a>  
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">CONNECT WITH ME</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <a href="https://www.linkedin.com/in/zahidraimoon/" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 transition-transform duration-300 hover:scale-110">
                    <svg className="h-8 transition-transform duration-300 hover:rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0H4C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0ZM8.5 20H5.5V9H8.5V20ZM7 7.5C6.17157 7.5 5.5 6.82843 5.5 6C5.5 5.17157 6.17157 4.5 7 4.5C7.82843 4.5 8.5 5.17157 8.5 6C8.5 6.82843 7.82843 7.5 7 7.5ZM19 20H16V14.5C16 13.1193 15.1193 12.5 13.5 12.5C11.8807 12.5 11 13.1193 11 14.5V20H8V9H11V10.5C11.7956 9.70313 13.0044 9.5 14 9.5C15.0044 9.5 16.7956 9.5 18 9.5V9H19V20Z" fill="currentColor"/>
                    </svg>                        
                </a>
                <a href="https://github.com/zahidraimoon" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 transition-transform duration-300 hover:scale-110">
                    <svg className="h-8 transition-transform duration-300 hover:rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.58 0-.29-.01-1.05-.01-2.06-3.01.55-3.65-1.46-3.65-1.46-.49-1.24-1.2-1.57-1.2-1.57-.98-.67.07-.66.07-.66 1.08.08 1.65 1.11 1.65 1.11.96 1.64 2.52 1.16 3.13.88.1-.7.38-1.16.69-1.42-2.42-.27-4.958-1.21-4.958-5.39 0-1.19.43-2.17 1.13-2.93-.11-.27-.49-1.38.11-2.87 0 0 .9-.29 2.95 1.11.85-.24 1.75-.36 2.65-.36.9 0 1.8.12 2.65.36 2.05-1.4 2.95-1.11 2.95-1.11.6 1.49.22 2.6.11 2.87.69.76 1.11 1.74 1.11 2.93 0 4.19-2.54 5.11-4.96 5.38.39.34.77 1.01.77 2.04 0 1.47-.01 2.65-.01 3.01 0 .32.22.7.83.58C20.565 21.797 24 17.303 24 12c0-6.627-5.373-12-12-12" fill="currentColor"/>
                    </svg>                       
                </a>
                <a href="mailto:zahidraimoon@gmail.com" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 transition-transform duration-300 hover:scale-110">
                    <svg className="h-8 transition-transform duration-300 hover:rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12.713l-8.485-5.657A1 1 0 0 1 4 5.5h16a1 1 0 0 1 .485 1.556L12 12.713z" fill="currentColor"/>
                        <path d="M4 8.5l8 5.333 8-5.333v10.667l-8 5.333-8-5.333V8.5z" fill="currentColor"/>
                    </svg>                        
                </a>        
            </div>
        </div> 
    </div>
</section>

  </div>
  <HowItWorks />
  <Footer />
    </div>
    

  )
}

export default Home