const { getUserByLogin } = require('../services/user-service');

module.exports.isAuthenticated = (req) => {
    return extractCookies(req.get('Cookie')).isAuthenticated === 'true';
}

module.exports.getConnectedUserLogin = (req)=>{
    return extractCookies(req.get('Cookie')).login;
 }

 module.exports.isUserExists = (login, callback) =>{
    getUserByLogin(login, user =>{
        if(!!user){
            callback(true);
        } else{
            callback(false);
        }
    });
 }

const extractCookies = (cookiesStr) => {
    const cookiesObj = {};
    cookiesStr.split(';').map(c => c.trim()).forEach(c => {
        const key = c.split('=')[0];
        const value = c.split('=')[1];
        cookiesObj[key] = value;
    });
    return cookiesObj;
}

