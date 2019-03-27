import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import LoadingPage from './components/LoadingPage';
import configureStore from './store/storeConfig';
import auth from './auth/auth';

let hasRendered = false;

const store = configureStore();

const appjsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

const renderApp = () =>{
    if(!hasRendered){
        ReactDOM.render(appjsx, document.getElementById('root'));
        hasRendered = true;
    }
}
// Display Loader while set up is happening
ReactDOM.render(<LoadingPage />,document.getElementById('root'));

//Once Set up is done we call render app for now its immidiate
renderApp();