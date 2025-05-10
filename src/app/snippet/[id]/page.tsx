import React from 'react'

const SnippetDetailPage = async ({params}:{params:Promise<{ id: string }>}) => {

    const {id} = await params;


  return (
    <div>
      Detail{id}
    </div>
  )
}

export default SnippetDetailPage