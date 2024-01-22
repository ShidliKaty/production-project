import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Articles';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
