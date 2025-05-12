"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const saveSnippet = async(id:number, code:string)=>{
    await prisma.snippet.update({
        where:{
            id
        },
        data:{
            code
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

    if(typeof title !== "string" || title.length<1){
        return{message:"Title is required"}
    }
     if(typeof code !== "string" || code.length<1){
        return{message:"Code is required"}
    }

    await prisma.snippet.create({
      data:{
        title,
        code
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