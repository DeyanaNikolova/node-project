import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const userId = sessionStorage.getItem('userId'); 

  const req2 = req.clone({
    headers: req.headers.set('Set-Cookie',  `userId=${userId}`),
    withCredentials: true
  }); 
  return next(req2);
};



