import React from "react"
import { useRouter } from "next/router"

const Logout = () => {
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      localStorage.removeItem("token")
      localStorage.removeItem("user")

      router.reload()
    } catch (err) {
      alert("ログアウト失敗")
    }
  }

  return (
    <>
      <h1>ログアウトします。</h1>

      <form onSubmit={handleSubmit}>
        <button type="submit">ログアウト</button>
      </form>
    </>
  )
}

export default Logout
