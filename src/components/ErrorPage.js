import React from 'react'

const ErrorPage = () => {
  return (
    <div className='h-[75vh] flex justify-center items-center flex-col'>
        <h1 className='text-white text-center text-6xl'>404 Page Not Found 😢</h1>
        <p className='text-gray-400 text-center text-xl mt-10'>Try Going Back To The <a href="/" className='underline'>Main Page</a> And Search For Another Page</p>
    </div>
  )
}

export default ErrorPage