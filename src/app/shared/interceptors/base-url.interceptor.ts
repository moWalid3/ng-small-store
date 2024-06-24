import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl: string = 'https://fakestoreapi.com/';
  const finalReq = req.clone({ url: `${baseUrl}${req.url}` });
  return next(finalReq);
};

/*
  Error ==>

    400 ==> Incorrect Data Body, like data to post
    401 ==> un Authorized
    403 ==> Cors Origin
    404 ==> incorrect Path or Url
    409 ==> duplicated parameters, like in data to post
    500 ==> internal server Error

Success ==> 200 ==> success

*/
