import { Button } from '@/components/ui/button'
import React from 'react'

const TemplateSelector = (props: { goBack: () => void; generateResume: () => void; }) => {
    const { goBack, generateResume } = props;
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl'>Select Template</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="h-32 rounded-lg bg-gray-200 flex justify-center align-middle">Basic</div>
        </div>
        <div className='flex justify-between'>
            <Button variant="secondary" onClick={goBack}>Back</Button>
            <Button onClick={generateResume}>Generate</Button>
        </div>
    </div>
  )
}

export default TemplateSelector