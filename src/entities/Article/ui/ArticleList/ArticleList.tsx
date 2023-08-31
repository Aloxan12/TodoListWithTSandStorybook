import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: Article[]
    view?: ArticleView
}

export const ArticleList = memo(({
    className, articles, view = ArticleView.SMALL, isLoading,
}: ArticleListProps) => {
    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            className={cls.card}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles?.map(renderArticle) : null}
        </div>
    );
});
