import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary/ui/BugButton';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page data-testid="MainPage">
            <BugButton />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
