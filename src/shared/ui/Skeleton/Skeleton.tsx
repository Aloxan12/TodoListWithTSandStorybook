import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string
}

export const Skeleton = memo(({ className }: SkeletonProps) => {
    const l = '';
    return (
        <div className={classNames(cls.Skeleton, {}, [className])} />
    );
});
