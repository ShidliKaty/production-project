import { NotificationList } from 'entities/Notification';
import { memo, useCallback, useState } from 'react';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { classNames } from 'shared/lib/classNames';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useDevice();

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <div>
            {!isMobile ? (
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            )
                : (
                    <>
                        {trigger}
                        <AnimationProvider>
                            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                                <NotificationList />
                            </Drawer>
                        </AnimationProvider>

                    </>
                )}
        </div>

    );
});
