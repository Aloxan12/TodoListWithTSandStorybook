import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string
    width?: number | string
    height?: number | string
    border?: string
}

export const Skeleton = memo(({
    className, height, width, border,
}: SkeletonProps) => {
    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={style}
        />
    );
});
