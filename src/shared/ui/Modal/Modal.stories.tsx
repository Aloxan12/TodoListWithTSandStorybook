import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'lorem50 sdas das das das das asdas da das ads das das dasd ',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'lorem50 sdas das das das das asdas da das ads das das dasd ',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
