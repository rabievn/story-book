import React from "react";
import {Meta, StoryFn} from '@storybook/react';
import Checkbox from "./Checkbox";

export default {
    title: "test/Checkbox",
    component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />

export const LargeGray = Template.bind({});
LargeGray.args = {
    color: 'gray',
    size: 'large',
    isDark: false,
};
export const Gray = Template.bind({});
Gray.args = {
    color: 'gray',
    size: 'medium',
    isDark: false,
};
export const SmallGray = Template.bind({});
SmallGray.args = {
    color: 'gray',
    size: 'small',
    isDark: false,
};

export const LargeGreen = Template.bind({});
LargeGreen.args = {
    color: 'green',
    size: 'large',
    isDark: false,
};
export const Green = Template.bind({});
Green.args = {
    color: 'green',
    size: 'medium',
    isDark: false,
};
export const SmallGreen = Template.bind({});
SmallGreen.args = {
    color: 'green',
    size: 'small',
    isDark: false,
};

export const LargeBlue = Template.bind({});
LargeBlue.args = {
    color: 'blue',
    size: 'large',
    isDark: false,
};
export const Blue = Template.bind({});
Blue.args = {
    color: 'blue',
    size: 'medium',
    isDark: false,
};
export const SmallBlue = Template.bind({});
SmallBlue.args = {
    color: 'blue',
    size: 'small',
    isDark: false,
};
export const LargeBlueLight = Template.bind({});
LargeBlueLight.args = {
    color: 'light-blue',
    size: 'large',
    isDark: false,
};
export const BlueLight = Template.bind({});
BlueLight.args = {
    color: 'light-blue',
    size: 'medium',
    isDark: false,
};
export const SmallBlueLight = Template.bind({});
SmallBlueLight.args = {
    color: 'light-blue',
    size: 'small',
    isDark: false,
};
export const LargeViolet = Template.bind({});
LargeViolet.args = {
    color: 'violet',
    size: 'large',
    isDark: false,
};
export const Violet = Template.bind({});
Violet.args = {
    color: 'violet',
    size: 'medium',
    isDark: false,
};
export const SmallViolet = Template.bind({});
SmallViolet.args = {
    color: 'violet',
    size: 'small',
    isDark: false,
};

export const LargePink = Template.bind({});
LargePink.args = {
    color: 'pink',
    size: 'large',
    isDark: false,
};
export const Pink = Template.bind({});
Pink.args = {
    color: 'pink',
    size: 'medium',
    isDark: false,
};
export const SmallPink = Template.bind({});
SmallPink.args = {
    color: 'pink',
    size: 'small',
    isDark: false,
};
export const LargePinkLight = Template.bind({});
LargePinkLight.args = {
    color: 'light-pink',
    size: 'large',
    isDark: false,
};
export const PinkLight = Template.bind({});
PinkLight.args = {
    color: 'light-pink',
    size: 'medium',
    isDark: false,
};
export const SmallPinkLight = Template.bind({});
SmallPinkLight.args = {
    color: 'light-pink',
    size: 'small',
    isDark: false,
};




