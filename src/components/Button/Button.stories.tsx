import React from "react";
import Button from "./Button";
import {Meta, StoryFn} from '@storybook/react';
import Center from '../Center/Center';

export default {
    title: "Form/Button",
    component: Button,
    decorators: [story => <Center>{story()}</Center>]
    // args: {
    //     children: 'Button'
    // }
} as Meta<typeof Button>;

export const Primary = () => <Center> <Button variant="primary">Primary</Button></Center>
export const Secondary = () => <Center> <Button variant="secondary">Secondary</Button></Center>
export const Success = () => <Center> <Button variant="success">Success</Button></Center>
export const Danger = () => <Center><Button variant="danger">Danger</Button></Center>

// const Template: StoryFn<typeof Button> = (args: any) => <Center> <Button {...args}/></Center>
//
// export const PrimaryA = Template.bind({})
// PrimaryA.args = {
//     variant: 'primary',
//     // children: 'Primary args'
// }
//
// export const LongPrimaryA = Template.bind({})
// LongPrimaryA.args = {
//     ...PrimaryA.args,
//     // children: 'Long Primary Args'
// }
//
// export const SecondaryA = Template.bind({})
// SecondaryA.args = {
//     variant: 'secondary',
//     // children: 'Secondary args'
// }