import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = (_props: PageProps) => (
  <Layout>
    <h1>404 - Página no encontrada</h1>
    <p>Parece que te has perdido...</p>
  </Layout>
)

export default NotFound
