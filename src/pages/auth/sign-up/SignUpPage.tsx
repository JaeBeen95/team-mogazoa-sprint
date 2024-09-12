import { SignUpField } from '@/src/widgets/auth/components'
import Gnb from '@widgets/product/gnb/Gnb'

export default function SingUpPage() {
  return (
    <div className="h-screen">
      <Gnb />
      <main className="w-full h-full flex justify-center items-center bg-black-80">
        <SignUpField />
      </main>
    </div>
  )
}
