import React from 'react';

function withAuthenticate(ComponentOne, ComponentTwo) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
        password: "",
        }
      }

      render() {
        return (
          this.props.password === "" ? <ComponentOne {...this.props} /> : <ComponentTwo {...this.props} />
        )
      }
    }
  
}

export default withAuthenticate;