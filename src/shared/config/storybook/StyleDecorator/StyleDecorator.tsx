import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => (
    <div className="app light">{story()}</div>
);
