import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import cls from './ArticlesPage.module.scss';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const articles = useSelector(getArticles.selectAll);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
