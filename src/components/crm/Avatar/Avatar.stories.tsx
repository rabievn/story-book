import React from "react";
import {Meta, StoryFn} from '@storybook/react';
import Avatar from "./Avatar";

export default {
    title: "CRM/UI/Avatar",
    component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />

export const AvatarComponent = Template.bind({});


