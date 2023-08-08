import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'shared/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = () => <ArticleDetails id="1" />;

export const Primary = Template.bind({});
Primary.args = {};
