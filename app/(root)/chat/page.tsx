import React from 'react'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div className='container'>
    <div className='text-white flex padding-3 justify-center'>
        <h1>Talk directly to a community admin</h1>
    </div>
    <div className='px-3'><Button>Chat</Button></div>
    </div>
  )
}
