import type { CounterSchema } from './modal/types/CounterSchema';
import { counterReducer } from './modal/slice/counterSlice';
import Counter from './ui/Counter';

export { counterReducer, Counter, CounterSchema };
