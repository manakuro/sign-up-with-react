//@flow
import * as React from 'react'
import { Route, Switch } from 'react-router'
import { HomeContainer } from 'containers/HomeContainer'
import Layout from 'components/Layout'

export default function Routes() {
  return (
    <Switch>
      {/*home*/}
      <Route
        path="/"
        component={(props: any) => {
          return (
            <Layout {...props}>
              <HomeContainer {...props} />
            </Layout>
          )
        }}
        exact
      />
    </Switch>
  )
}
