import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SignInPage() {
  return (
    <div className='bg-gray-100 w-full h-screen overflow-y-hidden'> {/* Changed background color and height to h-screen */}

      <div className='flex justify-center items-center h-full'>
        <div className='w-[60%] h-full'> {/* Adjusted width to 60% */}
          <img src="https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-5166.jpg?ga=GA1.1.1023202871.1727554419&semt=ais_hybrid" alt="Sign In" className='w-full h-auto object-cover' /> {/* Adjusted height to auto */}
        </div>
        <div className='w-[40%] ml-[150px] h-full flex flex-col items-center justify-center'> {/* Adjusted width to 40% */}
          <h1 className='text-4xl font-extrabold text-black mb-4'>AI Resume Builder</h1> {/* Removed gradient and changed text color to black */}
          <SignIn style={{ width: '100%', height: '100%' }}/>
        </div>
      </div>
    </div>
  )
}

export default SignInPage