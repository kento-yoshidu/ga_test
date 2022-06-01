import { useState, useEffect } from "react"
import Link from "next/link"

import * as Styles from "../../styles/header.module.scss"

const Header = () => {
  const [user, setUser] = useState<string | null>("")

  useEffect(() => {
    setUser(localStorage.getItem("user"))
  }, [])

  return (
    <header className={Styles.header}>
      <h1 className={Styles.headerTitle}>
        <Link href="/">
          積読改善アプリ
        </Link>
      </h1>

      {user && (
        <>
          <p>{user}さんでログイン中</p>
          <Link href="/user/logout">ログアウト</Link>
        </>
      )}

      {!user && (
        <div>
          <p>ログインしていません。</p>

          <Link href="/user/login/">ログイン</Link>
        </div>
      )}
    </header>
  )
}

export default Header
