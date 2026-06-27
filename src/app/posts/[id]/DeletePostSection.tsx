import { verifySession } from '@/utils/session';
import DeletePostButton from './DeletePostButton';

interface DeletePostSectionProps {
  postId: number;
  postOwnerId: number;
}

export default async function DeletePostSection({ postId, postOwnerId }: DeletePostSectionProps) {
  const session = await verifySession();
  const isOwner = session && Number(session.userId) === postOwnerId;

  if (!isOwner) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <DeletePostButton id={postId} />
    </div>
  );
}
