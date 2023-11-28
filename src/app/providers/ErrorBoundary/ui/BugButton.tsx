import { useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';

const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onThrow = () => {
        setError(true);
    };
    return <Button onClick={onThrow}>Throw Error</Button>;
};

export default BugButton;
