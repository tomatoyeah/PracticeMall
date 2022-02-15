import axios from "axios";

// 利用axios对象的方法create创建一个axios实例
const requests = axios.create({
    // 基础路径：发出请求的时候，路径当中会出现api
    baseURL: "/api",
    // 请求超时的时间5s
    timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
    // config：配置对象，里面有一个很重要的属性：header请求头
    return config
})
// 响应拦截器
requests.interceptors.responses.use((res)=>{
    // 成功时回调
    return res.data
}),(error)=>{
    // 失败时回调
    return Promise.reject(new Error('faile'))
}

export default requests