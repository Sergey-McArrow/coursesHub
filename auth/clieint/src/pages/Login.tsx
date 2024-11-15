import { RegistrationForm } from '@/components/RefistrationForm'
import { FC } from 'react'

type LoginProps = {}

export const Login: FC<LoginProps> = ({}) => {
  return (
    <section className='p-4 border  rounded-lg '>
      <h1 className='pb-6 text-2xl'>Login</h1>
      <RegistrationForm title='login' />
    </section>
  )
}
