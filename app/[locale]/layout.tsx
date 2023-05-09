import './globals.css'
import { Inter } from 'next/font/google'
import { Link, NextIntlClientProvider, useLocale } from "next-intl";
import {notFound} from "next/navigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
    params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = useLocale();

  if (params.locale !== locale) notFound();

  return (
    <html lang="en">
      <body className={inter.className}>
      <NextIntlClientProvider locale={params.locale}>
          <header>
              <nav className="p-4 flex justify-center">
              <Link href="/" className="bg-sky-500 text-white rounded p-4">back to Home</Link>    
              </nav>
          </header>
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  )
}