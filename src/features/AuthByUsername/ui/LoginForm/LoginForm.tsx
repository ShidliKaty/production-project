import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

const LoginForm = (props: LoginFormProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};

export default LoginForm;
