import { Lato } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const lato = Lato({ weight: '700', subsets: ['latin'], variable: '--font-lato', })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${lato.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}