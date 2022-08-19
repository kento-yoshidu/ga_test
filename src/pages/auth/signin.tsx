import { getProviders, useSession, signIn, signOut } from "next-auth/react"

import type { CtxOrReq } from "next-auth/client/_utils"

interface Provider {
  github: {
    id: string
    name: string
    type: string
    signinUrl: string
    callbackUrl: string
  }
}

const LoginPage = ({ providers }: { providers: Provider }) => {
  const { data: session } = useSession()

  return (
    <div>
      <h1>カスタムログインページ</h1>
      {session ? (
        <>
          <div>ユーザー：{session.user?.name}</div>
          <button onClick={() => signOut()}>ログアウトする</button>
        </>
      ) : (
        <>
          {Object.values(providers).map((provider, i) => (
            <div key={`div${i}`}>
              <h2>{provider.id}でログインする</h2>

              <button onClick={() => signIn(provider.id, {
                callbackUrl: "/"
              })}>ログイン</button>
            </div>
          ))}
        </>
        )
      }
    </div>
  )
}

export const getServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: { providers }
  }
}

export default LoginPage
