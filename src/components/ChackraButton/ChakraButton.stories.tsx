import React from "react";
import {Button, ChakraProvider} from "@chakra-ui/react";
import {StoryFn} from "@storybook/react";

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: {
        colorScheme: {control: 'text'},
        onClick: {action: 'clicked'}
    },
}
const Template: StoryFn<typeof Button> = (args: any) => <Button {...args}/>

export const Success = Template.bind({})

Success.args = {
    colorScheme: 'green',
    children: 'Success'
}

export const Danger = Template.bind({})

Danger.args = {
    colorScheme: 'red',
    children: 'Danger'
}


