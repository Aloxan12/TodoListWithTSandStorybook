import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from 'src/pages/ArticleDetailPage/ui/ArticleDetailPage/ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

export const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])} />
    );
};
