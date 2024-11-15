'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FC, useState } from 'react'

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})
const url = import.meta.env.API_URL || 'http://localhost:3333/'
//if (!url) throw new Error('Cannot get .env variable')
type TRegistrationForm = { title: string }

export const RegistrationForm: FC<TRegistrationForm> = ({ title }) => {
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      password: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response = await fetch(url + title, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const res = await response.json()
      console.log(res)
      if (res.error) setError(res.error)
      if (res.message) setMessage(res.message)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-80 space-y-6'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className='w-fit'>Username</p>
                </FormLabel>
                <FormControl>
                  <Input placeholder='Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className='w-fit'>Password</p>
                </FormLabel>
                <FormControl>
                  <Input placeholder='Password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
      {error ? <p className='py-4 text-red-600'>{error}</p> : null}
      {message ? <p className='py-4 text-green-600'>{message}</p> : null}
    </>
  )
}
