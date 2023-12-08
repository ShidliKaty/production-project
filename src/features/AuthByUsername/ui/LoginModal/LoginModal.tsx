import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import Loader from 'shared/ui/Loader/Loader';
import Modal from 'shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginFormLazy';

interface LoginModalProps {
    className?: string
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    );
};

export default LoginModal;
