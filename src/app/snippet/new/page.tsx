import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

import React from 'react'

const CreateSnippetPage = () => {

  async function createSnippet(formData:FormData){
    "use server"
    const title = formData.get("title")  as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data:{
        title,
        code
      }
    })
    console.log("created snippet", snippet);
   redirect('/')
    
  }

  return (
    <form action={createSnippet} className='md:mx-10 md:w-2/3'>
      <div className='py-5 '>
        <Label className='pl-2 pb-2'>Title:</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className='py-5 '>
        <Label className='pl-2 pb-2'>Code:</Label>
        <Textarea className='h-[300px]'  name="code" id="code" />
      </div>
      <Button className='mt-5 ml-2 w-full' type='submit'>New</Button>
    </form>
  )
}

export default CreateSnippetPage
