import axios from "axios";

const APIPrefix = 'https://mock-api.driven.com.br/api/v4/driven-plus';

function LoginRequest(body){
    const loginPromise = axios.post(`${APIPrefix}/auth/login`, body);
    console.log(body);
    return loginPromise;
}

function SignUpRequest(body){
    const signUpPromise = axios.post(`${APIPrefix}/auth/sign-up`, body);
    console.log(body);
    return signUpPromise; 
}

export { LoginRequest, SignUpRequest };