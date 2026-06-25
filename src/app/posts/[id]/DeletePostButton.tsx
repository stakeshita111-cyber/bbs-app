'use client';

import { deletePost } from '@/actions/post';
import { useRouter } from 'next/navigation';

export default function DeletePostButton({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('本当に削除しますか？')) return;
    const result = await deletePost(id);
    if (result && result.error) {
      alert(result.error);
    } else {
      router.push('/');
      router.refresh();
    }
  };

  return (
    <button className='btn-danger' onClick={handleDelete}>
      削除
    </button>
  );
}
