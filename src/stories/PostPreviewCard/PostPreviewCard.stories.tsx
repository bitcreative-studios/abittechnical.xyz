import React from 'react'
import { Story, Meta } from '@storybook/react'
import PostPreviewCard, { PostPreviewCardProps } from './PostPreviewCard'

export default {
  title: 'Posts/Preview Card',
  component: PostPreviewCard,
  argTypes: {},
} as Meta<PostPreviewCardProps>

const Template: Story<PostPreviewCardProps> = args => (
  <PostPreviewCard {...args} />
)

export const Default = Template.bind({})
Default.args = {}
