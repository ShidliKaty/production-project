import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/shared/ui/Button/Button';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../modal/slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const { decrement, increment, add } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    // const increment = () => {
    //     dispatch(counterActions.increment());
    // };
    // const decrement = () => {
    //     dispatch(counterActions.decrement());
    // };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleAddFive}
                data-testid="increment-btn5"
            >
                {t('add5')}
            </Button>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleDec}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};

export default Counter;
