import Cookies from 'universal-cookie'
const cookies = new Cookies();
// interface CookieOptions {
//     path?: string;
//     expires?: Date;
//     maxAge?: number;
//     domain?: string;
//     secure?: boolean;
//     httpOnly?: boolean;
//     sameSite?: 'strict' | 'lax' | 'none';
// }

class CookiesService {
//   GET
get(name:string) {
    return cookies.get(name);
}
// SET
set(name:string,value:number,options:any) {
    return cookies.set(name,value, options)
}
// REMOVE 
remove(name:string, options:any) {
    return cookies.remove(name, options) 
}

}

export default new CookiesService()