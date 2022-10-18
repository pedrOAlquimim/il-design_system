import { InputHTMLAttributes, ReactNode } from 'react'

interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  <div className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full outline-none  focus:ring-2 ring-cyan-300'>
  </div>
}

// function TextInputIcon() {}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400'
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  // Icon: TextInputIcon,
}