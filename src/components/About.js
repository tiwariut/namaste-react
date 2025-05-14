import { Component } from 'react';

import User from './User';
import UserClass from './UserClass';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <UserClass name={'Utkarsh'} />
      </div>
    );
  }
}

export default About;
