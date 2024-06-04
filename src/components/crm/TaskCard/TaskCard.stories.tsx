import React from "react";
import {Meta, StoryFn} from '@storybook/react';
import TaskCard from "./TaskCard";

export default {
    title: "CRM/TaskCard",
    component: TaskCard,
} as Meta<typeof TaskCard>;

const Template: StoryFn<typeof TaskCard> = (args) => <TaskCard {...args} />

export const TaskCardComponent = Template.bind({});
TaskCardComponent.args = {};


