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

const LoginPage = ({ provider }: { provider: Provider }) => {
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
        <button onClick={() => {
          signIn(provider.github.id)
        }}>
          Githubアカウントでログインする
        </button>
        )
      }
    </div>
  )
}

export const getServerSideProps = async (context?: CtxOrReq) => {
  const provider = await getProviders()
  return {
    props: { provider }
  }
}

export default LoginPage
