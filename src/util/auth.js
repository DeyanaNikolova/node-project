module.exports.isAuthenticated = (req) => {
    return extractCookies(req.get('Cookie')).isAuthenticated === 'true';
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