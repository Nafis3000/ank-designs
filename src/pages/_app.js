import '@/styles/globals.css'
import Head from 'next/head'
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: "swap",
});


export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${montserrat.variable} font-sans`}>
      <Head>
        <title>Ankur Dixit | UX Designer</title>
        <meta
          name="Ankur Dixit UX Designer"
          content="Ankur Dixit UX Designer"
        />
      </Head>
      <Component {...pageProps} />
      </main>
    </>
  );
}
