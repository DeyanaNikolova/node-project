import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const userId = sessionStorage.getItem('userId');
  const cookie =  document.cookie = `userId=${userId}`;

  const req2 = req.clone({
    headers: req.headers.set('$Set-Cookie', cookie),
    withCredentials: true
  }); 
  return next(req2);
};



