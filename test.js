
axios.default.baseURL = "http://22.0.33.1/api"
axios.default.time = 5000;
axios({
    url:"/home",
    type:"get",
    params:{
        name:"aaa"
    }
}).then(data=>{
    console.log(data)
})


axios.all([axios({},axios({})]).
    then(axios.spread((res,res2)=>{
        console.log(res,res2)
}));

// 当多个请求的请求地址不一样的时候不能通过axios的来进行，因为默认配置的baseURL无法实现多个域的请求

const instance = axios.create({
    baseURL:"http://22.0.33.1/api",
    time:5000
})
instance({url:"/home",
    type:"get",
    params:{
        name:"aaa"
    }
}).then(data=>{
    console.log(data)
})

request.js
// 1
    // export function request(config,success,failure){
    //     const instance = axios.create({
    //         baseURL:"http://localhost:3000",
    //         time:5000
    //     })
    //     instance(config).
    //     then(res=>{
    //         success(res)
    //     }).
    //     catch(err=>{
    //         failure(err)
    //     })
    // }
    // //2
 // export function request(config){
 //        const instance = axios.create({
 //            baseURL:"http://localhost:3000",
 //            time:5000
 //        })
 //        instance(config.baseconfig).then(res=>{
 //            config.success(res)
 //        }).
 //        catch(err=>{
 //            config.failure(err)
 //        })
 //    }
 //    
 //    3
 //    
 //    
 //    export function request(config){
 //        const instance = axios.create({
 //            baseURL:"http://localhost:3000",
 //            time:5000
 //        })
 //        return instance(config)
 //    }

//拦截器
// export function request(config){
//         const instance = axios.create({
//             baseURL:"http://localhost:3000",
//             time:5000
//         })
//         //请求拦截
//         instance.interceptors.request.use(config=>{
//             return config;
//         },err=>{

//         });
//         //响应拦截
        
//         instance.interceptors.response.use(config=>{
//             return config;
//         },err=>{

//         })

//         return instance(config)
// }



// ---------
//1
// 使用 request
    // import {request} from "./request"
    // request({
    //     url:"",
    //     params
    // },function(data){

    // },function(err){

    // })

//2
// 使用 request
    // import {request} from "./request"
    // request({
        //baseconfig:{
            //  {
            //     url:"",
            //     params
            // }
        //},
        //sueccess:function(data){
        //},
        //failure:function(err){

        //}
    // })
    // 
    // 
    // 3
    // request({
    //     url:"/api/home",
    //     params:{
    //         name:"asds"
    //     }
    // }).then(data=>{

    // }).catch(err=>{
    //     console.log(err);
    // })



 
