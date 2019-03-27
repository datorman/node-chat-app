import React, {Component} from 'react';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    renderContent(){
        return 'login'
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