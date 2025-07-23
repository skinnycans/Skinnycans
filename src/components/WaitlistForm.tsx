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
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SiteConfig } from '@/config/site-i18n'
import { Icons } from './icons'

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

export default function WaitlistForm({ config }: { config?: SiteConfig }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="w-full max-w-xl pt-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full items-center bg-white/15 p-1.5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1 grow">
                <FormControl>
                  <Input
                    placeholder={config?.placeholder}
                    className="border-none text-white shadow-none outline-none ring-0 placeholder:text-white focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#F1F1F1] px-4 py-3 text-xs uppercase tracking-wider text-primary transition-colors duration-300 hover:bg-primary hover:text-white md:px-8 lg:text-base xl:text-lg"
          >
            {config?.submit} <Icons.rightArrow className="h-5 w-5" />
          </button>
        </form>
      </Form>
    </div>
  )
}
