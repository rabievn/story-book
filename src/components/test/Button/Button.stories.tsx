import React from "react";
import Button from "./Button";
import {Meta, StoryFn} from '@storybook/react';

export default {
    title: "Test/Form/Button",
    component: Button,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Button UI chakra',
            defaultValue: 'primary',
            options: ['primary', 'success', 'danger'],
            control: {
                type: 'radio',
            }
        }
    }
} as Meta<typeof Button>;


const Template: StoryFn<typeof Button> = (args: any) => <Button {...args}/>

export const Default = Template.bind({})

Default.args = {
    children: 'Press me',
    variant: 'primary'
}
export const Large = Template.bind({})

Large.args = {
    children: 'Press me',
    variant: 'success'
}


// import React from "react";
// import Button from "./Button";
// import {Meta, StoryFn} from '@storybook/react';
//
// export default {
//     title: "Form/Button",
//     component: Button,
//     // args: {
//     //     children: 'Button'
//     // }
// } as Meta<typeof Button>;
//
// export const Primary = () => <Button variant="primary">Primary</Button>
// export const Secondary = () => <Button variant="secondary">Secondary</Button>
// export const Success = () => <Button variant="success">Success</Button>
// export const Danger = () => <Button variant="danger">Danger</Button>
//
// // const Template: StoryFn<typeof Button> = (args: any) => <Button {...args}/>
// //
// // export const PrimaryA = Template.bind({})
// // PrimaryA.args = {
// //     variant: 'primary',
// //     // children: 'Primary args'
// // }
// //
// // export const LongPrimaryA = Template.bind({})
// // LongPrimaryA.args = {
// //     ...PrimaryA.args,
// //     // children: 'Long Primary Args'
// // }
// //
// // export const SecondaryA = Template.bind({})
// // SecondaryA.args = {
// //     variant: 'secondary',
// //     // children: 'Secondary args'
// // }