class UserService {
    login(user) {
        return new Promise((resolve, reject)=>{
            if(user.name == "AFFSuper" && user.password == "AFFSuper"){
                resolve(user);
            }
            else{
                reject("Incorrect name or password");
            }
        });
    }
}
module.exports = new UserService();
