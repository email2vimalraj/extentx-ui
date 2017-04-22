import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Project extends Component {

  render() {
    return(
      <Panel>
        {this.props.projectName}
      </Panel>
    );
  }

}

export default Project;
