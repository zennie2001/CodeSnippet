import Sidebar from "@/components/Sidebar/Sidebar";
import SnippetList from "@/components/SnippetList/SnippetList";
import { prisma } from "@/lib/prisma";



export default async function Home(){

  const snippetsRaw = await prisma.snippet.findMany();

  const snippets = snippetsRaw.map(s => ({
  ...s,
  createdAt: s.createdAt.toISOString(),
  updatedAt: s.updatedAt.toISOString(),
}));
  

  return (
   <div className="flex justify-center">
    {/* <div className="w-[20%] hidden lg:flex ">
      <Sidebar />
    </div> */}

    <SnippetList snippets={snippets} />
    
    
   
   </div>
  );
}
