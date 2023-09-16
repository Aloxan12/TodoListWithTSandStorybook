import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import cls from './Flex.module.scss';

interface FlexProps {
    className?: string
    children: ReactNode
}

export const Flex = ({ className, children }: FlexProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Flex, {}, [className])}>
            {children}
        </div>
    );
};
