import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import logo from '/logo.png'


function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 bg-gray-900 flex justify-between shadow-md'>
             <Link to={'/'} className='flex items-center'>
                <img src={logo} alt="Resume Builder Logo" className='w-8 h-8' /> {/* Reduced width and height */}
                <span className='text-white text-lg font-semibold ml-2'>Resume Builder</span> {/* Styled text */}
            </Link>
            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    <Link to={'/dashboard'}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={'/auth/sign-in'}>
                    <Button>Get Started</Button>
                </Link>
            }

        </div>
    )
}

export default Header