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

function planRequest(body){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const planPromise = axios.get(`${APIPrefix}/subscriptions/memberships`, config);
    return planPromise;
}

function signPlanRequest(id){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const signPlanPromise = axios.get(`${APIPrefix}/subscriptions/memberships/${id}`, config);
    return signPlanPromise;
}

function confirmSignPlan(body){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const confirmSignPlanPromise = axios.post(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`, body, config);
    return confirmSignPlanPromise;
}

function deletePlan(){
    const token = localStorage.getItem('myToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const deletePlanPromise = axios.delete(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`, config);
    return deletePlanPromise;
}

export { LoginRequest, SignUpRequest, planRequest, signPlanRequest, confirmSignPlan, deletePlan };