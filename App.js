import React from 'react';
import ReactDOM from 'react-dom/client';

const HeaderComponent = () => {
  return <h1 id='heading'>Namaste React</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);
