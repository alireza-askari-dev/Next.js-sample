export const HEADER_BASE = {
  "content-type": "application/json",
  "Accept-Language": "fr-IR,fr;q=0.5",
};

// mrx : base url
export const BASE_URL = `http://exmaple-backed.ir/api`;

// mrx : base image url
export const BASE_Image_Url = `http://exmaple-backed.ir/`;

// const export const POSTS = `${BASE_URL}/posts/`;
export const GET_USER_DETAIL = `${BASE_URL}/Authenticate/Login`;

// mrx : signup
export const SIGNUP = `${BASE_URL}/Authenticate/Register`;

// mrx : re send verify
export const RE_SEND_CODE = `${BASE_URL}/Authenticate/ReSendVerifyCode`;

// mrx : send verify for resetpassword
export const VERIFY_RESET_PASSWORD = `${BASE_URL}/Authenticate/ReSendForgetPasswordCode`;

// mrx : check is verif code for reset password is ok
export const CHECK_VERIFY_RESET_PASSWORD = `${BASE_URL}/Authenticate/VerifyForgetPasswordCode`;

// mrx : reset password
export const RESET_PASSWORD = `${BASE_URL}/Authenticate/ResetPassword`;

// mrx : verify Code
export const VERIFY = `${BASE_URL}/Authenticate/VerifyCode`;
