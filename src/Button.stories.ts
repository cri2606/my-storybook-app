import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { within } from "@testing-library/react"
import { userEvent } from '@storybook/testing-library'
const meta: Meta<typeof Button> = {
  title: 'Components/Button', 
  component: Button, 
  tags: ['autodocs'], 
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Click Me',
    onClick: () => alert('Clicked!')
  }
}

export const AutoDisableOnClick: Story = {
    args: {
      label: 'Click Me (Auto Disable)',
      onClick: () => console.log('Clicked!'),
      disabled: null
    }
  }

  export const WithInteraction: Story = {
    args: {
        label: "Click me",
        onClick: () => alert('Clicked!'),
    },
    play: async ({canvasElement}) =>{
        const canvas = within(canvasElement)
        const button = canvas.getByRole("button")
        await userEvent.click(button)
    }
  }
