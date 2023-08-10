import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
    title: 'shared/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (arg) => <ArticleCodeBlockComponent {...arg} />;

export const Primary = Template.bind({});
Primary.args = {
    block: {
        type: ArticleBlockType.CODE,
        id: '2',
        code: 'export default {\n'
            + '    title: \'shared/ArticleCodeBlockComponent\',\n'
            + '    component: ArticleCodeBlockComponent,\n'
            + '    argTypes: {\n'
            + '        backgroundColor: { control: \'color\' },\n'
            + '    },\n'
            + '} as ComponentMeta<typeof ArticleCodeBlockComponent>;',
    },
};
