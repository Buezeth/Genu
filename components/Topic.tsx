import React from 'react'

function Topic({title}: {title: String}) {
  return (
    <div className="relative max-w-[500px]">
        <div className="topic bg-[--primary-500] h-20 flex justify-center items-center rounded-xl">
          <h1 className="text-center text-white text-3xl font-black">
            {title}
          </h1>
        </div>


      </div>
  )
}

export default Topic