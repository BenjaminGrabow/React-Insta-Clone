import React from 'react';

function withAuthenticate(ComponentOne, ComponentTwo) {
    return class extends React.Component {
      render() {
        return (
          this.props.counter === "" ? <ComponentOne {...this.props} /> : <ComponentTwo {...this.props} />
        )
      }
    }
  
}

export default withAuthenticate;