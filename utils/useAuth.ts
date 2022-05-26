import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import jwt from "jsonwebtoken"


const useAuth = () => {
  const [loginUser, setLoginUser] = useState<string>("")
  const router = useRouter()
  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/user/login")
    }

    try {
      window.alert(secretKey)

      const decoded = jwt.verify(token, secretKey)

      setLoginUser(decoded.email)
    } catch (err) {
      router.push("/user/login/")
    }
  }, [router])

  return loginUser
}

export default useAuth
