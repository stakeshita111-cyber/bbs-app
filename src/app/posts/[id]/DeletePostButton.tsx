'use client';

import { deletePost } from '@/actions/post';
import { useTransition } from 'react';

export default function DeletePostButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm('本当に削除しますか？')) return;

    startTransition(async () => {
      const result = await deletePost(id);
      if (result && result.error) {
        alert(result.error);
      }
    });
  };

  return (
    <button
      className='btn-danger'
      onClick={handleDelete}
      disabled={isPending}
      style={{ opacity: isPending ? 0.7 : 1, cursor: isPending ? 'not-allowed' : 'pointer' }}
    >
      {isPending ? '削除中...' : '削除'}
    </button>
  );
}
