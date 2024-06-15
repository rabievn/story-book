import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import PrimaryButton from './PrimaryButton'

export default {
  title: 'CRM/PrimaryButton',
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>

const Template: StoryFn<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />

export const PrimaryButtonComponent = Template.bind({})
PrimaryButtonComponent.args = {}
