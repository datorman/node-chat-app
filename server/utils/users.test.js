const expect = require('expect');

const {Users} = require('./users');

describe('users class tests', () => {
    var users;
    beforeEach(() =>{
        users = new Users;
        users.users = [{
            id:1,
            name:"Mike",
            room:"Development"
        },{
            id:2,
            name:"Ike",
            room:"Development"
        },{
            id:3,
            name:"BRuh",
            room:"React"
        }];
    });
    it('Should add a new user', () => {
        var users = new Users();
        var user = {
            id:123,
            name:"mike",
            room:"lotr"
        };
        var resuser = users.addUser(user.id, user.name,user.room);
        expect(users.users).toEqual([user]);
    });
    it('should return a list of users in a Development rom', () => {
        var userList = users.getUserList("Development");
        expect(userList).toEqual(['Mike','Ike']);
    });
    it('should return a list of users in a React rom', () => {
        var userList = users.getUserList("React");
        expect(userList).toEqual(['BRuh']);
    });
    it('should remove a user from the users list by id', ()=>{
        var user = users.removeUser(1);
        expect(user).toEqual([{id:1, name:"Mike", room:"Development"}]);
        expect(users.users.length).toBe(2);
    });
    it('should not remove user user doesnt exist', () =>{
        var user = users.removeUser(222);
        expect(user).toEqual([]);
        expect(users.users.length).toBe(3);
    });
    it('should return a user by id', () =>{
        var user = users.getUser(2);
        expect(user).toEqual([{id:2,name:"Ike",room:"Development"}]);
    });
    it('should not find a user by id', () =>{
        var user = users.getUser(12);
        expect(user).toEqual([]);
    });
});