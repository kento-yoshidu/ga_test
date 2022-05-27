import React from "react"

interface Props {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = ({ children }) => (
  <div>
    { children }
  </div>
)

export default Layout
