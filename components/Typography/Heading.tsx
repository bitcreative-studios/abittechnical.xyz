import React from 'react'

export type HeadingProps = {
  text: string
}
const Heading = ({ text }: HeadingProps) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default Heading
