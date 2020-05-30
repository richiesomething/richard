import React from 'react';
import './styles/App.css';
import './styles/styles.css'
import Left from './components/Left'
import Right from './components/Right'

function App() {
  return (
      <div className={'w3-content w3-margin-top App'}>
        <div className={'w3-row-padding'}>
          <div className={'w3-third'}>
            <Left/>
          </div>
          <div className={'w3-twothird'}>
            <Right/>
          </div>
        </div>
      </div>
  );
}

export default App;
