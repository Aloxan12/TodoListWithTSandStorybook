import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export default {
    title: 'feature/Input',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '1234', password: '1234' },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    loginForm: { username: '1234', password: '1234', error: 'some error' },
})];

export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [StoreDecorator({
    loginForm: { username: '1234', password: '1234', isLoading: true },
})];
