import httpClient from "@/services/httpClient";
import { server } from "@/services/constants"
import router from "@/router"


const isLoggedIn = () => {
    let token = localStorage.getItem(server.TOKEN_KEY) ;
    return token != null ;
}


const login = async (values) => {
    let result = await httpClient.post(server.LOGIN_URL, values)
    alert(JSON.stringify(result))

    /*let result = awit httpClient.post(server.LOGIN_URL, values) ;
    if(result.data.result == "ok") {
        localStorage.setItem(server.USERNAME, values.username) ;
        localStorage.setITem(server.TOKEN_KEY,result.data.token) ;
        router.push("/stock") ;
        return ;
    } else {
        return false ;
    }*/

    localStorage.setItem(server.USERNAME, values.username) ;
    localStorage.setItem(server.TOKEN_KEY, "1234") ;
    return true 
}

const register = async (values) => {
    // console.log('รับแล้ว', values)
    let result = await httpClient.post(server.REGISTER_URL, values);
    console.log(result)
    if (result.data.result == "register") {
      router.go(-1);
    } else {
      alert(JSON.stringify(result));
    }
}

const logoff = () => {
    localStorage.removeItem(server.TOKEN_KEY) 
    router.push("/login")
}


export default {
    isLoggedIn,
    login,
    logoff,
    register
}