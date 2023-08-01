import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: 'Первый' },
        { value: '2', content: 'Второй' },
    ],
};
