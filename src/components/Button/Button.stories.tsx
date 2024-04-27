import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import MySvg from './../../assets/shoppingIcon.svg';

type Story = StoryObj<typeof Meta>;

const Meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
};

export const ButtonShappe: Story = {
  args: {
    text: 'CONTINUAR',
    type: 'pool',
    color: 'blue',
    textSize: 'regular',
    icon: MySvg
  }
};

export default Meta;
