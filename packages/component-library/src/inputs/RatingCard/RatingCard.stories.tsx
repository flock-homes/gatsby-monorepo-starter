import React from "react"
import { Story } from "@storybook/react"
import RatingCard from "."

export default {
  title: "Inputs/RatingCard",
  component: RatingCard,
  argTypes: {
    label: {
      control: { type: "string" },
    },
  },
}

const Template: Story = args => <RatingCard label={args.label} />

export const Default = Template.bind({})
Default.args = {
  label: "This is a rating card component!",
}
