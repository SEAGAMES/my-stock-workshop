import { server } from "@/services/constants"


const isLoggedIn = () => {
    let token = localStorage.getItem(server.TOKEN_KEY) ;
    return token != null ;
}

const login = values => {
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
    localStorage.setITem(server.TOKEN_KEY, "1234") ;
    return true 
}

export default {
    isLoggedIn ,
    login
}