"use client"
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type { Snippet } from '@/generated/prisma'
import { Button } from './button'
import { saveSnippet } from '@/actions'


const EditSnippetForm = ({snippet}:{snippet:Snippet}) => {
    const [code, setCode] = useState(snippet.code);

    const changeEventHandler = (value:string = "")=>{
        setCode(value)
    }

    const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)

  return (
    <div className='flex flex-col gap-4' >
        <form action={saveSnippetAction} className='flex items-center justify-between'>
            <h1 className='font-semibold text-xl'>Your Code Editor</h1>
            <Button type='submit'>Save</Button>
        </form>
            <Editor
              height="90vh"
              theme='vs-dark'
              defaultLanguage="javascript"
              defaultValue={code}
              onChange={changeEventHandler}
              
            />
    </div>
  )
}

export default EditSnippetForm
