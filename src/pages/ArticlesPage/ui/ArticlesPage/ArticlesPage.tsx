import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('ARTICLES PAGE')}
        </div>
    );
};

export default memo(ArticlesPage);
