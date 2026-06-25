'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/actions/post';

export default function CreatePostPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await createPost(formData);

    if (result && result.error) {
      setError(result.error);
      return;
    }

    router.push('/');
  };

  return (
    <div className='container' style={{ maxWidth: '600px', marginTop: '30px' }}>
      <div className='card'>
        <h2 style={{ marginBottom: '20px' }}>新規投稿</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label className='form-label' htmlFor='title'>
              タイトル
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className='form-input'
              placeholder='タイトルを入力'
            />
          </div>
          <div className='form-group'>
            <label className='form-label' htmlFor='content'>
              本文
            </label>
            <textarea
              id='content'
              name='content'
              className='form-textarea'
              placeholder='本文を入力'
            ></textarea>
          </div>
          {error && <p className='error-message'>{error}</p>}
          <button type='submit' className='btn'>
            投稿する
          </button>
        </form>
      </div>
    </div>
  );
}
