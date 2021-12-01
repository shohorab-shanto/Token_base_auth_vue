import Token from './Token'   //import child class because this is a parent global class
import AppStorage from './AppStorage'

class User{

    responseAfterLogin(res){ //check in login  is there has any token and user orr not
        const access_token = res.data.access_token //from login response access token will store here
        const username = res.data.name
        if(Token.isValid(access_token)){ //token valid hole condition colbe
            AppStorage.store(access_token,username) //valid hole appstorage er store method er maddhome access token and username store hobe
        }
    }

    hasToken(){
        const storeToken = localStorage.getItem('token');
        if(storeToken){ //jdi token thke
            return Token.isValid(storeToken)? true : false
        }
        false
    }

    loggedIn(){ //this is for this token is for this user or not
        return this.hasToken()
    }

    name(){
        if(this.loggedIn){ //login korar por user pabe tai login method newa
            return localStorage.getItem('user');
        }
    }

    id(){
        if(this.loggedIn){ //login korar por user pabe tai login method newa
            const payload = Token.payload(localStorage.getItem('token'));
            return payload.sub
        }
        return false
    }

}

export default User = new User();
