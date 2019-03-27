export default (state = {}, action) =>{
    switch(action.type){
        case 'ROOM_LIST':
            return{
                rooms: action.rooms
            };
        case 'SET_ROOMS':
            return{
                rooms:action.rooms
            };
        default:
            return state;
    }
};