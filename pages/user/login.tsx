import React, { useState } from "react"

import Link from "next/link"

const Login = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      const jsonData = await response.json()

      localStorage.setItem("token", jsonData.token)

      alert(jsonData.message)
    } catch (err) {
      alert("失敗")
    }
  }

  return (
    <>
      <Link href="/">トップへ戻る</Link>

      <h1>ログイン</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="mail"
          name="email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        /> <br />
        <button type="submit">登録</button>
      </form>
    </>
  )
}

export default Login
