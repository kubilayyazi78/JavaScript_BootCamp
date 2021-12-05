import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
  constructor(loggerService) {
    this.employees = [];
    this.customers = [];
    this.errors = [];
    this.loggerService = loggerService;
  }
  load() {
    for (const user of users) {
      switch (user.type) {
        case "customer":
          if (!this.checkCustomerValidityForErrors(user)) {
            this.customers.push(user);
          }
          break;
        case "employee":
          if (!this.checkEmployeeValidityForErrors(user)) {
            this.employees.push(user);
          }
          break;
        default:
          this.errors.push(new DataError("Wrong user type", user));
          break;
      }
      console.log(user);
    }
  }

  checkCustomerValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem ${field} is required`, user)
        );
      }
    }
    if (Number.isNaN(Number.parseInt(user.age))) {
      this.errors.push(
        new DataError(`Validation problem ${user.age} not a number`, user)
      );
      hasErrors = true;
    }
    return hasErrors;
  }

  checkEmployeeValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem ${field} is required`, user)
        );
      }
      
    }
    return hasErrors;
  }

  add(user) {
    //  this.users.push(user);
    this.loggerService.log(user);
  }
  list() {
    //  return this.users;
  }
  getById(id) {
    //  return this.users.find((u) => u.id === id);
  }
}
