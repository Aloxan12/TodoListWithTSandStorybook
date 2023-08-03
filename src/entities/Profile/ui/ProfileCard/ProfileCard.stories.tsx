import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/img.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'pages/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'alex',
        age: 22,
        country: Country.America,
        lastName: 'shav',
        first: 'alex',
        city: 'minsk',
        currency: Currency.USD,
        avatar,
    },
};
Primary.decorators = [StoreDecorator({})];

export const WithError = Template.bind({});
WithError.args = {
    error: 'Ошибка',
};
WithError.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
