import React, {Component} from 'react';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    renderContent(){
        return 'register'
    }
    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
            )
    }
}
export default Auth;