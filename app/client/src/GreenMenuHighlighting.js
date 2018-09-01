import React, { Component } from 'react'

export const withGreenMenuHighlighting = (WrappedComponent) => {
  return class extends Component {
    constructor (props) {
      super(props)
      this.state = {
        highlighted: -1
      }

      this.toggleHighlight = this.toggleHighlight.bind(this)
    }

    toggleHighlight (target) {
      this.setState({
        highlighted: target
      })
    }

    render () {
      const { highlighted } = this.state
      const { id } = this.props
      return (
        <WrappedComponent
          {...this.props}
          isActive={highlighted === id}
          handleHoverIn={this.toggleHighlight}
          handleHoverOut={() => { this.toggleHighlight(-1) }}
        />
      )
    }
  }
}
