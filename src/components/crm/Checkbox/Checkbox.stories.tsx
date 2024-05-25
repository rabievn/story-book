import React from "react";
import {Meta, StoryFn} from '@storybook/react';
import Checkbox from "./Checkbox";

export default {
    title: "Checkbox",
    component: Checkbox,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Variant of the Checkbox',
            defaultValue: 'primary',
            options: [
                'blue', 'gray', 'green', 'violet'
            ],
            control: {type: 'select'},
        },
    }
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />

export const LargeGray = Template.bind({});
LargeGray.args = {
    color: 'gray',
    size: 'large',
};
export const Gray = Template.bind({});
Gray.args = {
    color: 'gray',
    size: 'medium',
};
export const SmallGray = Template.bind({});
SmallGray.args = {
    color: 'gray',
    size: 'small',
};

export const LargeGreen = Template.bind({});
LargeGreen.args = {
    color: 'green',
    size: 'large',
};
export const Green = Template.bind({});
Green.args = {
    color: 'green',
    size: 'medium',
};
export const SmallGreen = Template.bind({});
SmallGreen.args = {
    color: 'green',
    size: 'small',
};

export const LargeBlue = Template.bind({});
LargeBlue.args = {
    color: 'blue',
    size: 'large',
};
export const Blue = Template.bind({});
Blue.args = {
    color: 'blue',
    size: 'medium',
};
export const SmallBlue = Template.bind({});
SmallBlue.args = {
    color: 'blue',
    size: 'small',
};

export const LargeViolet = Template.bind({});
LargeViolet.args = {
    color: 'violet',
    size: 'large',
};
export const Violet = Template.bind({});
Violet.args = {
    color: 'violet',
    size: 'medium',
};
export const SmallViolet = Template.bind({});
SmallViolet.args = {
    color: 'violet',
    size: 'small',
};

