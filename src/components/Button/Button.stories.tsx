import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

type Story = StoryObj<typeof Meta>;

const Meta: Meta<typeof Button> = {
  title: 'Pages/Components/Button',
  component: Button,

  decorators: (Story) => (
    <Story text='CONTINUAR' type='pool' color='blue' textSize='regular' icon='string' />
  )
};

export const ButtonShappe: Story = {};

export default Meta;
