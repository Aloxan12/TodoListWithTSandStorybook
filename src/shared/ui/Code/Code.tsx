import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string
    children: string
}

export const Code = memo(({ className, children }: CodeProps) => {
    const { t } = useTranslation();
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn}>{t('Копировать')}</Button>
            <code>
                {children}
            </code>
        </pre>
    );
});
