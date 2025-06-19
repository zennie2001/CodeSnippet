"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Editor } from '@monaco-editor/react'
import * as action from "@/actions"
import React, { useActionState,  useState } from 'react'
import { toast} from 'react-toastify'

const CreateSnippetPage = () => {

  const[language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");

  const [state,  formAction] = useActionState(action.createSnippet, {message:""});

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    
    const form = e.currentTarget;
    const titleInput = form.elements.namedItem('title') as HTMLInputElement;
    const title = titleInput?.value.trim();
    

    if(!title){
      toast.error("Title is required")
    }

    if(!code){
      toast.error("Code is required")
    }

    const formData = new FormData(form);
    formData.set("code", code);         // editor code
    formData.set("language", language); 

    formAction(formData);
      }

  

  return (
  
    
     <form onSubmit={handleSubmit} className='md:mx-10 lg:ml-50 lg:w-2/3 md:w-2/3 pt-6 pb-20'>
      <div className='py-5 '>
        <Label className='pl-2 pb-2'>Title:</Label>
        <Input type="text" name="title" id="title" className='bg-white'   />
      </div> 
       <div className='py-5 '>
        <Label className='pl-2 pb-2'>Select Language:</Label>
        <select
          name="language"
          id="language"
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-white border rounded-md p-2 w-full accent-green-600"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="json">JSON</option>
        </select>
       </div> 

      <div className='py-5 '>
        <Label className='pl-2 pb-2'>Code:</Label>
        <div className='rounded-md overflow-hidden  '>
         <Editor
              className=''
              height="70vh"
              theme='vs-dark'
              language={language}
              value={code}
              onChange={(value)=> setCode(value || "")}/>

          </div>
              
        {/* <Textarea className='h-[300px] bg-white'  name="code" id="code"  /> */}
      </div>
       {/* {state.message && <div className=' p-2 bg-red-300 border-2 border-red-600'>{state.message}</div> }   */}
      <button className="bg-[#3D8D7A] text-white w-full text-right px-4 py-2 mt-2 flex justify-center rounded-xl hover:bg-[#4e7641]  ">Save
        </button>
    </form>
    
   
  )
}

export default CreateSnippetPage
