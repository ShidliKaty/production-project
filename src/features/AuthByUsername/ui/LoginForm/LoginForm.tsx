import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../modal/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../modal/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../modal/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../modal/selectors/getLoginError/getLoginError';
import { loginByUserName } from '../../modal/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../modal/slice/loginSlice';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);

        return () => {
            store.reducerManager.remove('loginForm');
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeUsername = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    const { className } = props;
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;
