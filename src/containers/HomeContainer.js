//@flow
import * as React from 'react'
import Home from 'components/Home'
import type { HomeState } from 'modules/home/types.flow'
import type { ContextRouter } from 'react-router'
import { connect } from 'react-redux'
import type { RootState } from 'modules/types.flow'
import type { Dispatch } from 'redux'

type DispatchProps = any
type OwnProps = {|
  ...ContextRouter,
|}
type StateProps = HomeState & OwnProps
export type HomeProps = StateProps & DispatchProps

export class HomeContainer extends React.PureComponent<HomeProps> {
  constructor(props: HomeProps) {
    super(props)
  }

  render() {
    return <Home {...this.props} />
  }
}

export function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {}
}

export function mapStateToProps(
  state: RootState,
  ownProps: OwnProps,
): StateProps {
  return {
    ...state.home,
    ...ownProps,
  }
}

export default connect<
  HomeProps,
  OwnProps,
  StateProps,
  DispatchProps,
  RootState,
  Dispatch,
>(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer)
