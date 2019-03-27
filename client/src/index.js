import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import LoadingPage from './components/LoadingPage';

let hasRendered = false;

const renderApp = () =>{
    if(!hasRendered){
        ReactDOM.render(<App />, document.getElementById('root'));
        hasRendered = true;
    }
}
// Display Loader while set up is happening
ReactDOM.render(<LoadingPage />,document.getElementById('root'));

//Once Set up is done we call render app for now its immidiate
renderApp();



