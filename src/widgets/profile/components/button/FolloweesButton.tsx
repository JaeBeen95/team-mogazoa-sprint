import { useToggle } from '@shared/hooks'
import { ProfileFolloweesModal } from '@/src/widgets/profile-follow-modal'

interface FollowerButtonProps {
  userId: number | undefined
  nickname: string
  followeesCount: number
}

export default function FolloweesButton({
  userId,
  nickname,
  followeesCount,
}: FollowerButtonProps) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <>
      <button type="button" onClick={onOpenToggle}>
        <div className="flex flex-col items-center text-white text-xl">
          <div>{followeesCount}</div>
          <span className="text-black-20 text-base">팔로잉</span>
        </div>
      </button>
      {isToggle && (
        <ProfileFolloweesModal
          userId={userId}
          nickname={nickname}
          onCloseToggle={onCloseToggle}
        />
      )}
    </>
  )
}
