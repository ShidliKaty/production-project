import { forwardRef, ReactNode } from 'react';
import Button from '../Button/Button';

interface ListBoxButtonProps {
    className?: string
    children: ReactNode;
    disabled?: boolean;
}

const ListBoxButton = forwardRef<HTMLDivElement, ListBoxButtonProps>((props, ref) => (
    <div ref={ref}>
        <Button {...props} />
    </div>
));

export default ListBoxButton;
