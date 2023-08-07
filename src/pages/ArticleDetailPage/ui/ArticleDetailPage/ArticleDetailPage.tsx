import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from 'src/pages/ArticleDetailPage/ui/ArticleDetailPage/ArticleDetailPage.module.scss';
import { memo } from 'react';

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            {t('Article Detail')}
        </div>
    );
};

export default memo(ArticleDetailPage);
