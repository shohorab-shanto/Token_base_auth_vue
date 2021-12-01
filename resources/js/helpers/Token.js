class Token{

isValid(token){
    const payload = this.payload(token)  //take token in a unchangeable variable
    if(payload){
        return payload.iss = "http://127.0.0.1:8000//api/auth/login" || "http://127.0.0.1:8000//api/auth/register" ? true : false //check token comes from this url or not
    }
    return false   //if condition does not match it will return false
}

payload(token){  //take a payload method
    const payload = token.split('.')[1]  //every token has has 3 part so here split it and next line i decode it and take 1 part
    return this.decode(payload)
}

decode(payload){
    return JSON.parse(atob(payload))  //atob javascript build in method
}

}

export default Token = new Token();
