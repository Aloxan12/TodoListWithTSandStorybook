import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'trew trew ',
    theme: TextTheme.ERROR,
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text',
};

export const TitleWithText = Template.bind({});
OnlyText.args = {
    title: 'Title',
    text: 'Text',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleWithTextDark = Template.bind({});
OnlyTextDark.args = {
    title: 'Title',
    text: 'Text',
};
TitleWithTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title l',
    text: 'Text text text',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title m',
    text: 'Text text text',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title s',
    text: 'Text text text',
    size: TextSize.S,
};
