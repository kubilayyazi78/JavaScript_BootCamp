import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("UserComponent Loaded")

let userService=new UserService()

let user1=new User(1,"Kubilay","Yazı","Karabük")
let user2=new User(2,"Alp","Hnc","İst")


userService.add(user1);
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(1))


userService.getById(1);
userService.list();


let customer ={id:1,firstName:"Kubilay"}

customer.lastName="Yazı"

console.log(customer.lastName)