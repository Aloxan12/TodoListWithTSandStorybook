import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'

interface FlexProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
}

export const Flex = ({
    className, children, justify = 'start', align = 'center', direction = 'row',
}: FlexProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Flex, {}, [className])}>
            {children}
        </div>
    );
};
