import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Input,
  args: {
    placeholder: 'johndoe@exemple.com',
    type: 'email', 
  },
  argTypes: {}
} as Meta<TextInputInputProps>

export const Default: StoryObj<TextInputInputProps> = {}
