import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTeme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTeme;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTeme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
