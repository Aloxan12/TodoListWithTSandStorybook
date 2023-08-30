export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { Article, ArticleView } from './model/types/article';
export { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from './model/selectors/articleDetails';

export { ArticleList } from './ui/ArticleList/ArticleList';
