import React from 'react'

export type HeadingProps = {
  text: string
}
const Heading = ({ text }: HeadingProps) => {
  return (
    <div>
      <h1 className="text-4xl text-gray-500 font-bold">{text}</h1>
    </div>
  )
}

export default Heading
