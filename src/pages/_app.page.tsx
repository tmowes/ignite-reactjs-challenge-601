import '../libs/dayjs'

import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/libs/react-query'

const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export default function App(appProps: AppProps) {
  const { Component, pageProps } = appProps
  const { session } = pageProps

  return (
    <div className={`${nunito.className}`}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  )
}
