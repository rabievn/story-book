import React from "react";
import {Button} from "@chakra-ui/react";
import {action, actions} from "@storybook/addon-actions";
import {StoryFn} from "@storybook/react";


export default {
    title: 'test/Chakra/Button',
    component: Button,
    argTypes: {
        colorScheme: {control: 'text'},
        onClick: {action: 'clicked'},
        variant: {
            type: String,
            description: 'Chkra Ui Button',
        }
    },
}
//
// export const Success = () => <Button onClick={action('clicked')} colorScheme={'green'}>Success</Button>
// export const Danger = () => <Button {...actions('onClick', 'onMouseOver')} colorScheme={'red'}>Danger</Button>
export const Log = () => <Button onClick={() => console.log('Log')} colorScheme={'blue'}>Log</Button>

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

// export default {
//     title: 'Chakra/Button',
//     component: Button,
//     argTypes: {
//         colorScheme: {control: 'text'},
//         onClick: {action: 'clicked'}
//     },
// }

//
// export const Success = Template.bind({})
//
// Success.args = {
//     colorScheme: 'green',
//     children: 'Success'
// }
//
// export const Danger = Template.bind({})
//
// Danger.args = {
//     colorScheme: 'red',
//     children: 'Danger'
// }


