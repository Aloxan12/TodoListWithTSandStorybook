import {classNames} from "helpers/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme{
    primary = 'primary',
    secondary = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({className, to, children, theme= AppLinkTheme.primary}) => {
    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};