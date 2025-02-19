import { useForm } from 'react-hook-form'
import { Button, Form, TextareaInput, TextFieldInput } from '@shared/ui'
import { descriptionValidation } from '@shared/utils'
import { nicknameValidation } from '@widgets/auth/lib/form-validation'
import { useProfileEditForm } from '@widgets/profile/hooks'
import { ProfileImageUpload } from '@widgets/profile/components'
import { useFetchMyProfile } from '@shared/hooks/query'
import type { UserPayload } from '@shared/types'

interface ProfileEditFormProps {
  onCloseToggle: () => void
}

export default function ProfileEditForm({
  onCloseToggle,
}: ProfileEditFormProps) {
  const profileQuery = useFetchMyProfile()
  const profileData = profileQuery.data!

  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    setError,
  } = useForm<UserPayload>({
    defaultValues: {
      nickname: profileData.nickname,
      description: profileData.description,
      image: profileData.image || undefined,
    },
    mode: 'all',
  })

  const description = watch('description')

  const onSubmit = useProfileEditForm({
    onSuccess: () => onCloseToggle(),
    onFailed: (field: keyof UserPayload, errorMessage: string) =>
      setError(field, { message: errorMessage }),
  })

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-10 gap-y-10"
    >
      <div className="flex flex-col gap-5 tablet:gap-[15px] mobile:gap-2.5">
        <ProfileImageUpload error={errors.image?.message} control={control} />
        <div className={`${errors.nickname ? 'mb-6' : ''}`}>
          <TextFieldInput
            placeholder="닉네임을 입력해 주세요"
            className="h-[70px] tablet:h-[60px] mobile:w-full"
            setValue={setValue}
            {...register('nickname', nicknameValidation)}
            errors={errors}
          />
        </div>
        <TextareaInput
          {...register('description', descriptionValidation)}
          value={description}
          placeholder="프로필 소개를 입력해주세요"
          errors={errors}
        />
      </div>
      <Button variant="primary">저장하기</Button>
    </Form>
  )
}
