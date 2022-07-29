// import { useRouter } from "next/router"
import { getProviders, getCsrfToken, useSession, signIn, /* signOut */ } from "next-auth/react"

const LoginPage = ({providers, csrfToken }: { providers: any, csrfToken: any }) => {
  // const { error } = useRouter().query
  const { data: session } = useSession()

  console.log(providers)

  return (
    <div>
      <h1>カスタムログインページ</h1>
      {session ? (
        // ログイン状態の場合。ユーザー名、ログアウトボタンを表示。
        <>
          <div>ユーザー：{session.user?.name}</div>
          {/* <button onClick={signOut}>ログアウト</button> */}
        </>
      ): (
        <button onClick={() => {
          signIn(providers.callbacknUrl)
        }}>
          Sign in with Github
        </button>
        )
      }
    </div>
  )
}

// POSTリクエスト(サインイン・サインアウトなど)に必要なCSRFトークンを返却する。
export const getServerSideProps = async (context: any) => {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: { providers, csrfToken }
  }
}

export default LoginPage
