export const startLogin = (res) =>({
    type: 'LOGIN',
    token: res.headers["x-auth"],
    user:{
        email:res.data.user.email,
        id: res.data.user._id
    }
});
export const logout = () =>({
    type: 'LOGOUT'
});
