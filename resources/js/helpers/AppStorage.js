class AppStorage{

    storeToken(token){
        localStorage.setItem('token',token); //name and value //taking tokken
    }

    storeUser(user){
        localStorage.setItem('user',user); //taking user
    }

    store(token,user){  // store user and token
        this.storeToken(token)
        this.storeUser(user)
    }

    clear(){ //clear token and user
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    getToken(){ //get token
        localStorage.getItem(token);
    }

    getUser(){ //get user
        localStorage.getItem(user);
    }

}

export default AppStorage = new AppStorage();
