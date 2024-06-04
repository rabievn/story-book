import React from "react";
import {Meta, StoryFn} from '@storybook/react';
import Checkbox from "./Checkbox";

export default {
    title: "CRM/UI/Checkbox",
    component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />

export const CheckboxComponent = Template.bind({});


