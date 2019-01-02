//@flow
import * as React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import Routes from 'routes/routes'

type Props = {
  history: History,
}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { history } = this.props

    return (
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    )
  }
}

export default App
