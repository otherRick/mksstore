import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

type Story = StoryObj<typeof Meta>;

const Meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,

  decorators: (Story) => (
    <Story
      description='asdads'
      id={1}
      name='asdas'
      photo='asdf'
      price='123'
      brand='asda'
      createdAt='asdasd'
      key={1}
      updatedAt='asdds'
    />
  )
};

export const Card: Story = {};

export default Meta;
