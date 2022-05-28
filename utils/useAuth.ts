import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import jwt from "jsonwebtoken"


const useAuth = () => {
  const [loginUser, setLoginUser] = useState<string>("")
  const router = useRouter()
  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

  useEffect(() => {
    const token = localStorage.getItem("token") || undefined

    if (!token) {
      router.push("/user/login")
    }

    try {
      if (token && secretKey) {
        const decoded = jwt.verify(token, secretKey)
        /* @ts-ignore */
        setLoginUser(decoded.email)
      }
    } catch (error) {
      router.push("/user/login")
    }
  }, [router])

  return loginUser
}

export default useAuth
/*
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import jwt from "jsonwebtoken"

const useAuth = async () => {
  const [loginUser, setLoginUser] = useState<string>("")
  const router = useRouter()
  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/user/login")
    }

    try {
      /* @ts-ignore
      const decoded = jwt.verify(token, secretKey)

      /* @ts-ignore
      setLoginUser(decoded.email)
    } catch (err) {
      router.push("/user/login/")
    }
  }, [router])

  return loginUser
}

export default useAuth
*/
