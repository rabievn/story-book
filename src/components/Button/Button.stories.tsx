import React from "react";
import Button from "./Button";
import {Meta, Args, StoryFn} from '@storybook/react';

export default {
    title: "Form/Button",
    component: Button
} as Meta<typeof Button>;

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

const Template: StoryFn<typeof Button> = (args: any) => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary args'
}