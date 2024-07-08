'use client'
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import React from 'react'

const Dashboard = () => {
    const {data: session} = useSession({
        required: true,
        // onUnauthenticated() {
        //   redirect('/signIn?callbackUrl=/')
        // },
    });
  return (
    <section className='p-24'>
        <div className='container'>
            <p>Hello {session?.user?.name}</p>
            <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
    </section>
  )
}

export default Dashboard