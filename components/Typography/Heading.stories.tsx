import React from 'react'
import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Elements/Heading',
  component: Heading,
  argTypes: {},
} as Meta<HeadingProps>

const Template = args => <Heading {...args} />
