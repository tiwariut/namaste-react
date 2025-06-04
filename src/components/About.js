import { Component } from 'react';

import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          Logged In User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className='text-xl font-bold'>{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={'Utkarsh'} />
      </div>
    );
  }
}

export default About;
