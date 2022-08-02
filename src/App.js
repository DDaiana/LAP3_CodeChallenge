import React from 'react';
import {TopBar, UserInfo, InfoDetails} from './components';

function App() {
  return (
    <div className="App">  

        <TopBar />

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
