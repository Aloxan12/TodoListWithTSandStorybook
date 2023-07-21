import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState, loginActions } from 'features/AuthByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);

    const onChangeUsername = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                autofocus
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
                value={loginForm.username}
                onChange={onChangeUsername}
            />
            <Input
                placeholder={t('Введите пароль')}
                type="text"
                className={cls.input}
                value={loginForm.password}
                onChange={onChangePassword}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
