// mrx : cookie
import Cookies from 'js-cookie'

export const makeAuthData = () => ({
    authorization: `Bearer ${Cookies.get("tm3fn4t867oehg4863ftbkijuhy34gvfeiu736t4n")}`,
});
