import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text title={t('Комментарии')} className={cls.commentTitle} />
            <CommentList comments={[
                {
                    id: '1',
                    text: 'comment 1',
                    user: { id: '1', username: 'alex', avatar: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg' },
                },
                {
                    id: '2',
                    text: 'comment 2',
                    user: { id: '1', username: 'alex', avatar: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg' },
                },
            ]}
            />
        </div>
    );
};

export default memo(ArticleDetailPage);
