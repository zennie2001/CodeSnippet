"use client"
import React from 'react'

type ErrorProps = {
    error:Error
}

const ErrorPage : React.FC<ErrorProps> = ({error}) => {
  return (
    <div>
      {error.message}
    </div>
  )
}

export default ErrorPage
