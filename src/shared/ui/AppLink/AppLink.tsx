import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    primary = 'primary',
    secondary = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
  className, to, children, theme = AppLinkTheme.primary,
}) => (
  <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
    {children}
  </Link>
);
