import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout:5000
    })
    
    // instance.interceptors.request.use(config => {
    //     return config
    // }, err => {
    // })

    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config);
}


// axios.all([
//     axios({
//         url: url1
//     }),
//     axios({
//         url: url2
//     })
//     ])
//     .then( axios.spread( (res1,res2) => {

//     }) )