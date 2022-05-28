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
      <h1>
        { user && (
          <p>{user}さんでログイン中</p>
        )}
        <Link href="/">
          積読改善アプリ
        </Link>
      </h1>
    </header>
  )
}

export default Header
