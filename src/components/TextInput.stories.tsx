import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    placeholder: 'johndoe@exemple.com',
    type: 'email', 
  },
  argTypes: {}
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
