import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'
import * as action from "@/actions";
import { notFound } from 'next/navigation';

type SnipppetDetailsProps = {
  params: Promise<{ id: string }>;
};

const SnippetDetailPage: React.FC<SnipppetDetailsProps> = async ({
  params,
}) => {
  const id = parseInt((await params).id);
    
    await new Promise((r)=> setTimeout(r, 2000))

  

    const snippet = await prisma.snippet.findUnique({
        where:{
            id
        },
    })

    if(!snippet) notFound();

    const deleteSnippetActions = action.deleteSnippet.bind(null, snippet.id)

  return (
    
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>{snippet.title}</h1>
        <div className='flex items-center gap-2'>
        <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>

        <form action={deleteSnippetActions}>
        <Button variant={'destructive'} type='submit'>Delete</Button>
        </form>
        </div>
      </div>

      <pre className=' my-3 px-3 pt-3 pb-60 text-wrap bg-white rounded border-gray-400'>
        <code>{snippet.code}</code>
      </pre>
    </div>
    
  )
}

export default SnippetDetailPage;

export const generateStaticParams = async ()=>{
  const snippets = await prisma.snippet.findMany();

  return snippets.map((snippet :{id: string | number})=>{
    return{id:snippet.id.toString()}
  })
}