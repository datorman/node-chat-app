export default (state = {}, action) =>{
    switch(action.type){ 

        case 'SET_ACTIVE_ROOM':
            return{
                activeRoom: action.activeRoom
            };
        default:
            return state;
    }
};