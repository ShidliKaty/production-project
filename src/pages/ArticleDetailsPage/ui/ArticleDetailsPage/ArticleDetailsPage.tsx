import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('ARTICLES DETAILS')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
