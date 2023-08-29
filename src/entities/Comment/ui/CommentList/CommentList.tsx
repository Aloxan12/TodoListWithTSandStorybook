import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <div>
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
            </div>
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            className={cls.comment}
                            comment={comment}
                            key={comment.id}
                            isLoading={isLoading}
                        />
                    ))
                    : <Text text={t('Комментарии отсуствуют')} />
            }
        </div>
    );
});
