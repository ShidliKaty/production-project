import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eum voluptas corrupti accusamus quia consequatur adipisci assumenda reprehenderit doloremque aperiam.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eum voluptas corrupti accusamus quia consequatur adipisci assumenda reprehenderit doloremque aperiam.',

};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
