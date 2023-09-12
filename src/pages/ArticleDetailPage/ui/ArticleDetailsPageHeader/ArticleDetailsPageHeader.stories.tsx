import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'page/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = () => <ArticleDetailsPageHeader />;

export const Primary = Template.bind({});
Primary.args = {};
