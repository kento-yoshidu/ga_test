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
}

export default useAuth
