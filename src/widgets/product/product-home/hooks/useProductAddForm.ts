import { isAxiosError } from 'axios'
import { createProduct } from '@shared/api'
import type { ProductPayload } from '@shared/types'
import { useCreateProduct } from '@/src/shared/hooks'
import { toast } from 'react-toastify'

interface UseProductForm {
  onSuccess: () => void
  onFailed: (field: keyof ProductPayload, errorMessage: string) => void
}

export default function useProductAddForm({
  onSuccess,
  onFailed,
}: UseProductForm) {
  const { mutateAsync, isPending } = useCreateProduct()
  const onSubmit = async (data: ProductPayload) => {
    if (!data.categoryId)
      return onFailed('categoryId', '카테고리를 입력해주세요.')

    try {
      mutateAsync({
        categoryId: data.categoryId,
        description: data.description,
        name: data.name,
        image: data.image,
      })
      onSuccess()
      toast.success('상품이 생성되었습니다')
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const field = Object.keys(
          error.response.data.details,
        )[0] as keyof ProductPayload
        const errorMessage = error.response.data.details[field].message
        toast.error(errorMessage)

        if (field.includes('image'))
          return onFailed('image', '이미지를 올려주세요.')

        return onFailed(field, errorMessage)
      }

      throw new Error('알 수 없는 에러가 발생했어요.')
    }
  }

  return { onSubmit, isPending }
}
