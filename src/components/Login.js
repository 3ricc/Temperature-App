import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';

const CLIENT_ID = '771121425913-goqnhh7v837mejbl5c1dgar416fvnp11.apps.googleusercontent.com';


class Login extends Component {

    success = (reponse) => {

    }

    failure = (response) => {
        
    }
    
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.success}
                    onFailure={this.failure}
                    cookiePolicy={'single_host_origin'}
            />
            </div>
        );
    }
}


export default Login;