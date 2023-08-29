import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

export default {
    title: 'shared/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: { id: '1', text: 'hello world', user: { id: '1', username: 'Vlad' } },
    isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
    comment: { id: '1', text: 'hello world', user: { id: '1', username: 'Vlad' } },
    isLoading: true,
};
