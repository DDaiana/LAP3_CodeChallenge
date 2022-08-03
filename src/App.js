import React from 'react';
import './styles/app.css'
import {TopBar, UserInfo, InfoDetails} from './layout';

function App() {
  return (
    <div className="App">  

        <div className='main-header'>
          <TopBar />
        </div>

        <div>
          <UserInfo />
        </div>        

        <div>
           <InfoDetails />
        </div>
        
      
    </div>
  );
}

export default App;
