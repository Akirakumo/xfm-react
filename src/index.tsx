import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
// import './index.less'

// redux
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// redux
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


// useContext
// import { MyProvider } from './context'

// ReactDOM.render(
//   <MyProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </MyProvider>,
//   document.getElementById('root')
// )

