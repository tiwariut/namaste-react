import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
        avatar_url: 'https://dummy-photo.com'
      }
    };
  }

  async componentDidMount() {
    const data = await fetch('https:api.github.com/users/tiwariut');
    const json = await data.json();

    this.setState({
      userInfo: json
    });
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className='user-card'>
        <img src={avatar_url} alt='' />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @utkarsh007</h2>
      </div>
    );
  }
}

export default UserClass;
