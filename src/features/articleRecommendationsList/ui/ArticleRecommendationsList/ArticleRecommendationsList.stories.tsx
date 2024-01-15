import React, { Suspense } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <Suspense fallback={<div>Loading...</div>}>
        <ArticleRecommendationsList {...args} />
    </Suspense>
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];
