import React from 'react';
import { render } from 'react-dom';

function withAuthenticate(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthed: false
      }
    }
    componentDidMount() {
      const isAuthed = !!localStorage.getItem('isAuthed');
      this.setState({ isAuthed });
    }

    componentDidUpdate() {
      const isAuthed = !!localStorage.getItem('isAuthed');
      if (this.state.isAuthed !== isAuthed) {
        this.setState({ isAuthed });
      }
    }

    render() {
      return(
        <Component isAuthed={this.state.isAuthed} />
      )
    }
  }
}