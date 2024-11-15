import { RegistrationForm } from '@/components/RefistrationForm'
import { FC } from 'react'

type RegisterProps = {}

export const Register: FC<RegisterProps> = ({}) => {
  return (
    <section className='p-4 border  rounded-lg '>
      <h1 className='pb-6 text-2xl'>Register</h1>
      <RegistrationForm title='register' />
    </section>
  )
}
