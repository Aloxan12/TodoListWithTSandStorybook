import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (<ArticleListItem article={article} view={view} />);

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length > 0 ? articles?.map(renderArticle) : null}
        </div>
    );
});
