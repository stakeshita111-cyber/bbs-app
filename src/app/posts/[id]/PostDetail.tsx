import { Suspense } from 'react';
import DeletePostSection from './DeletePostSection';

interface PostDetailProps {
  post: {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    user: {
      id: number;
      userName: string;
    };
  };
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <>
      <div className='card'>
        <h1 style={{ marginBottom: '15px', fontSize: '24px' }}>
          {post.title}
        </h1>
        <p
          style={{
            color: '#666',
            fontSize: '14px',
            marginBottom: '20px',
            borderBottom: '1px solid #eee',
            paddingBottom: '10px',
          }}
        >
          投稿者: {post.user?.userName || '不明'} | 作成日: {new Date(post.createdAt).toLocaleString()}
        </p>
        <div style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
          {post.content}
        </div>
      </div>

      <Suspense fallback={null}>
        <DeletePostSection postId={post.id} postOwnerId={post.user.id} />
      </Suspense>
    </>
  );
}
