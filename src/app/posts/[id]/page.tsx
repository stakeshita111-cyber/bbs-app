import Link from 'next/link';
import PostDetail from './PostDetail';
import { getPost } from '@/actions/post';
import { verifySession } from '@/utils/session';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(Number(id));

  if (!post) {
    notFound();
  }

  const session = await verifySession();
  const isOwner = session && Number(session.userId) === post.user.id;

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

      <PostDetail post={post} isOwner={!!isOwner} />
    </div>
  );
}
