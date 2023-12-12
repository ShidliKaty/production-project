import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

const ProfilePage = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [])}>
            {t('PROFILE PAGE')}
        </div>
    );
};

export default ProfilePage;
