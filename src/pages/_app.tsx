import type { AppProps } from "next/app"

import Layout from "./components/Layout"
import AuthWrapper from "./components/AuthWrapper"

import "../scss/style.scss"

import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthWrapper>
    </SessionProvider>
  )
}
export default MyApp
