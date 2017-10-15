import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';

const Root_Path = "http://reduxblog.herokuapp.com/api/";
const Api_key = "?key=jinal1652"

export function fetchPost() {
    const request = axios.get(`${Root_Path}posts${Api_key}`)
    return {
        type:FETCH_POST,
        payload:request
    }
}

export function createPost(values,callback) {
    const request = axios.post(`${Root_Path}posts${Api_key}`,values).then(()=>callback());
    return {
        type:CREATE_POST,
        payload:request
    }
}