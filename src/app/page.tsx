import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const snippets = await prisma.snippet.findMany();

  return (
   <div>
    <h1 className="font-bold text-4xl">Home</h1>
    <div className="flex items-center justify-between my-4 mx-2">
      <h1 className="text-xl font-semibold">Snippets</h1>
      <Link href='/snippet/new'><Button  >New</Button></Link>
    </div>
    {snippets.map((snippet)=>(
      <div key={snippet.id} className="flex items-center justify-between py-2 px-2 border border-gray-400 rounded-md my-4 bg-white ">
        <h1>{snippet.title}</h1>
        <Link href={`/snippet/${snippet.id}`} >
        <Button variant={'link'}>View</Button>
        </Link>
      </div>
    ))}
   </div>
  );
}
