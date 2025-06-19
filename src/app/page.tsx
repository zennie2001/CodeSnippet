import Sidebar from "@/components/Sidebar/Sidebar";
import SnippetList from "@/components/SnippetList/SnippetList";
import { prisma } from "@/lib/prisma";



export default async function Home(){

  const snippets = await prisma.snippet.findMany();

  

  return (
   <div className="flex gap-24 -ml-12">
    <div className="w-[20%] hidden lg:flex ">
      <Sidebar/>
    </div>

    <SnippetList snippets={snippets} />
    
    
   
   </div>
  );
}
