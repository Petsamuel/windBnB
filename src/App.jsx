import { Fragment } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./components/page/Home";

export const App = () => {
  return (
    <Fragment>
      <Layout>
        <Home />
      </Layout>

    </Fragment>
  )
}