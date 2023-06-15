import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//
import { Provider } from 'react-redux';
import { store } from './redux/Store';

//



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <Provider store={store} >
    
    <BrowserRouter>
      <App />
    </BrowserRouter>


   </Provider>
<<<<<<< HEAD
  //  </React.StrictMode>
=======
  </React.StrictMode>
>>>>>>> 588ac9489a92766e994efda013f0242fba59ac32

);

