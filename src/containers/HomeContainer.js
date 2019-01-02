//@flow
import * as React from 'react'
import Home from 'components/Home'

export class HomeContainer extends React.PureComponent<{}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return <Home {...this.props} />
  }
}
