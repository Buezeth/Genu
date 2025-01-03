import React from 'react'

function Topic({title}: {title: String}) {
  return (
    <div className="relative max-w-[500px]">
        <div className="topic bg-[--main-red] h-20 flex justify-center items-center">
          <h1 className="text-center text-white text-3xl font-black">
            {title}
          </h1>
        </div>

      </div>
  )
}

export default Topic