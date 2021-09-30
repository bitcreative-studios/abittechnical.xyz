import React from 'react'
import tw, { styled } from 'twin.macro'

const HeroContent = tw.div`w-full h-full grid grid-rows-8 grid-cols-12 container mx-auto`
const Brand = styled.div`
  writing-mode: vertical-lr;
  ${tw`font-heading tracking-wide text-primary text-lg`}
`
const TagLine = styled.div`
  writing-mode: vertical-lr;
  ${tw`col-start-10 col-end-13 row-start-2 row-end-4 font-heading`}
`

const TopicsBanner = styled.div`
  span {
    cursor: pointer;
  }
  ${tw`w-full h-20 flex items-center space-x-4 bg-gray-900 font-heading text-gray-300 overflow-x-hidden`}
`
const Hero = () => (
  <div tw="md:h-[768px] w-full">
    <HeroContent>
      <div tw="row-start-2 col-start-2 uppercase">
        <Brand>
          bitwhys <span tw="text-gray-900"> / tellusstraighter</span>
        </Brand>
      </div>
      <h1 tw="w-full row-start-2 row-end-7 col-start-4 col-end-12 grid grid-rows-3 grid-cols-8  gap-x-5 font-heading  lg:text-[12rem] font-medium  leading-tight uppercase">
        <div tw="col-start-2 col-end-5 space-x-8">
          <span>a</span>
          <span tw="text-primary">bit</span>
        </div>
        <div tw="col-start-1  col-end-4">
          <span>tech</span>
        </div>
        <div tw="row-start-3 col-start-4 col-end-7">
          <span>nical</span>
        </div>
      </h1>
      <TagLine>
        <p>
          Devide each difficultiy into{' '}
          <span tw="text-primary">as many parts</span> as feasible and necessary
          to solve it
        </p>
      </TagLine>
      <div tw="row-start-6 pt-6 row-end-auto col-start-2 col-end-6 font-heading ">
        <div tw="py-4 flex items-center justify-between border-t-2 border-b-2 border-black">
          <span>Release</span>
          <span>0001</span>
        </div>
        <div tw="py-4 flex items-center justify-between border-b-2 border-black">
          <span>Latest Commit</span>
          <span>65dc4812</span>
        </div>
      </div>
    </HeroContent>
    <TopicsBanner>
      {/*TODO: get the width of screen and pull in topics from graphql and repeat full width*/}
      <span>Software&nbsp;Engineering</span>
      <span>Frontend</span>
      <span>Backend</span>
      <span> Javascript</span>
      <span>Python</span>
      <span>React</span>
      <span>Machine&nbsp;Learning</span>
      <span>Software&nbsp;Engineering</span>
      <span>Frontend</span>
      <span>Backend</span>
      <span> Javascript</span>
      <span>Python</span>
      <span>React</span>
      <span>Machine&nbsp;Learning</span>
      <span>Software&nbsp;Engineering</span>
      <span>Frontend</span>
      <span>Backend</span>
      <span> Javascript</span>
      <span>Python</span>
      <span>React</span>
      <span>Machine&nbsp;Learning</span>
    </TopicsBanner>
  </div>
)

export default Hero
