import React from "react";
import {Meta, StoryFn} from '@storybook/react';
import Comment from "./Comment";

export default {
    title: "Comment",
    component: Comment,
} as Meta<typeof Comment>;

const Template: StoryFn<typeof Comment> = (args) => <Comment {...args} />

export const LargeGray = Template.bind({});
LargeGray.args = {
    color: 'gray',
    size: 'large',
};





