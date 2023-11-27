import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
