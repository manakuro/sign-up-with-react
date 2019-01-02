//@flow
import * as React from 'react'

type Props = {
  children: React.Node,
}

export default class Layout extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div>
        <main>{this.props.children}</main>
      </div>
    )
  }
}
