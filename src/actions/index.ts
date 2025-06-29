"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

interface SaveProps {
   id:number;
    code:string,  
}

export const saveSnippet: React.FC<SaveProps> = async({id, code} )=>{
    await prisma.snippet.update({
        where:{
            id
        },
        data:{
            code,
            
        }
    })
    revalidatePath(`/snippet/${id}`)
    redirect(`/snippet/${id}`)
}

export const deleteSnippet = async(id: number) =>{
    await prisma.snippet.delete({
        where:{id}
    })
    redirect('/')
}

export async function createSnippet(prevState:{message:string},formData:FormData){

    try {
        const title = formData.get("title")  ;
    const code = formData.get("code") ;
    const language = formData.get("language")

    if(typeof title !== "string" || title.length<1){
        return{message:"Title is required"}
    }
     if(typeof code !== "string" || code.length<1){
        return{message:"Code is required"}
    }
    if (typeof language !== "string" || language.length < 1) {
      return { message: "Language is required" };
    }



    await prisma.snippet.create({
      data:{
        title,
        code,
        language
      }
    })
    
    throw new Error("Oops something went wrong")
        
    } catch (error:unknown) {
        if(error instanceof Error){
            return{message: error.message}
        }else{
            return{message: "Some internal server error"}
        }
        
    }
    
    
    
    
   redirect('/')
    
  }