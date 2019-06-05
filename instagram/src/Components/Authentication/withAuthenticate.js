import React from 'react';

function withAuthenticate(ComponentOne, ComponentTwo) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          userName: "",
        }
      }

      render() {
        return (
          this.state.userName === "" ? <ComponentOne {...this.props} /> : <ComponentTwo {...this.props}/>
        )
      }
    }
  
}

export default withAuthenticate;