import { memo, useCallback } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
    className?: string;
}
const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            onClick={onToggleHandler}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon /> }
        </Button>
    );
});

export default ThemeSwitcher;
