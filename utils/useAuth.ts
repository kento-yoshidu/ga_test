import { useEffect } from "react"
import { useRouter } from "next/router"

import { useSession } from "next-auth/react"

const useAuth = () => {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) {
      router.push("/auth/signin")
    }
  })

  const loginUser = true

  return loginUser

  /*
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
        /* @ts-ignore 
        setLoginUser(decoded.email)
      }
    } catch (error) {
      router.push("/user/login")
    }
  }, [router])
  */

}

export default useAuth
