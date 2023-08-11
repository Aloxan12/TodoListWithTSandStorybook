import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string
    children: string
}

export const Code = memo(({ className, children }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(children);
    }, [children]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} onClick={onCopy} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {children}
            </code>
        </pre>
    );
});
