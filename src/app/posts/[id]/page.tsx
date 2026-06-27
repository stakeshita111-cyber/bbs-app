import Link from 'next/link';
import PostDetail from './PostDetail';
import { getPost } from '@/actions/post';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className='container' style={{ maxWidth: '800px', marginTop: '30px' }}>
      <Link
        href='/'
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          color: '#0070f3',
        }}
      >
        &larr; 一覧に戻る
      </Link>

      <Suspense fallback={<div className='card'><p className='post-content'>読み込み中...</p></div>}>
        <PostDetailPageContent params={params} />
      </Suspense>
    </div>
  );
}

async function PostDetailPageContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(Number(id));

  if (!post) {
    notFound();
  }

  return <PostDetail post={post} />;
}
