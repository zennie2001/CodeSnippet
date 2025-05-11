"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import * as action from "@/actions"
import React, { useActionState, useEffect } from 'react'

const CreateSnippetPage = () => {

  const [state, formAction] = useActionState(action.createSnippet, {message:""});

  

  return (
    <form action={formAction} className='md:mx-10 md:w-2/3'>
      <div className='py-5 '>
        <Label className='pl-2 pb-2'>Title:</Label>
        <Input type="text" name="title" id="title" className='bg-white'  />
      </div>
      <div className='py-5 '>
        <Label className='pl-2 pb-2'>Code:</Label>
        <Textarea className='h-[300px] bg-white'  name="code" id="code" />
      </div>
       {state.message && <div className=' p-2 bg-red-300 border-2 border-red-600'>{state.message}</div> }  
      <Button className='mt-5 ml-2 w-full' type='submit'>New</Button>
    </form>
  )
}

export default CreateSnippetPage
