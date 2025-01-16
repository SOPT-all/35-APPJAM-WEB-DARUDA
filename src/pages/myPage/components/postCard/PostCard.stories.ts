import type { Meta, StoryObj } from '@storybook/react';

import PostCard from './PostCard';

const meta = {
  title: 'Components/PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyPost: Story = {
  args: {
    isMine: true,
    title: '다루다루다루다루다루다루다루다루다루다',
    updatedAt: '2025.01.01',
    toolLogo: '',
    onClick: () => alert('클릭'),
  },
};

export const FavoritePost: Story = {
  args: {
    isMine: false,
    title: '다루다루다루다루다루다루다루다루다루다다루다루다루다루다루다루다루다루다루다',
    updatedAt: '2025.01.01',
    toolLogo: '',
    onClick: () => alert('클릭'),
  },
};