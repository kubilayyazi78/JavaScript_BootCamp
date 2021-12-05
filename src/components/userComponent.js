import {
  BaseLogger,
  ElasticLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("UserComponent Loaded");

let logger1 = new ElasticLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Kubilay", "Yazı", "Karabük");
let user2 = new User(2, "Alp", "Hnc", "İst");

userService.add(user1);
userService.add(user2);

//console.log(userService.list());
//console.log(userService.getById(1));

//userService.getById(1);
//userService.list();

let customer = { id: 1, firstName: "Kubilay" };

customer.lastName = "Yazı";

console.log(customer.lastName);

console.log("----------------------------------");

userService.load();

let customerToAdd = new Customer(10, "asd", "qwe", "city", "asdasd");
customerToAdd.type = "customer";

userService.add(customerToAdd);

console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);

console.log(userService.getCustomersSorted())