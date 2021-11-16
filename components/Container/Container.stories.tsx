import React from 'react'
import { Story, Meta } from '@storybook/react'
import Container, { ContentProps } from './Container'

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {},
} as Meta<ContentProps>

const Template: Story<ContentProps> = args => <Container {...args} />

export const Default = Template.bind({})

Default.args = {}
