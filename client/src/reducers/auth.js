export default (state = {}, action) =>{
    switch(action.type){
        case 'LOGIN':
            return{
                token: action.token,
                user: action.user
            };
        case 'LOGOUT':
            return{
                token:'',
                user:''
            };
        default:
            return state;
    }
};