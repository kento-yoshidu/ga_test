import React from "react"

import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = ({ children }) => (
  <>
    <Header />

    <main style={{ margin: "100px" }}>
      { children }
    </main>

    <Footer />
  </>
)

export default Layout
