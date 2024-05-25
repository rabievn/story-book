import React from "react";
import {StoryFn} from '@storybook/react';
import Checkbox from "./Checkbox";

// Ensure the Meta and Story types are correctly used
export default {
    title: "Checkbox",
    component: Checkbox,
}

// Define the template using the correct Story type
const Template: StoryFn<typeof Checkbox> = (args: any) => <Checkbox {...args} />

// Create a default story
export const Default = Template.bind({});
Default.args = {
    // Add default args if needed, e.g., checked: false
};

