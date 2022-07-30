import Link from "next/link"

import { useSession, signIn, signOut } from "next-auth/react"

import * as Styles from "../../styles/header.module.scss"

const Header = () => {
  const { data: session } = useSession()

  return (
    <header className={Styles.header}>
      <h1 className={Styles.headerTitle}>
        <Link href="/">
          積読改善アプリ
        </Link>
      </h1>

      {session && (
        <>
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut({
            callbackUrl: "/"
          })}>Sign out</button>
        </>
      )}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </header>
  )
}

export default Header
