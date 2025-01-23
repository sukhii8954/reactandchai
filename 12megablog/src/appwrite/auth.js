import config from "../config/confi.js";
import { Account, ID, Client } from "appwrite";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(config.appwriteUrl).setProject(
      config.appwriteProjectId
    );
    this.account = new Account(this.Client);
  }

  // Note:-
  // for creating a a ccount we create a method and call all services of appwrite
  //  we creating this method so that it would not be a dependency like
  // a person just write the values of emailid , name and password the account
  // would be created in it without being dependent ki voh appwrite mai handle ho
  // rha h ya firebase ya kisi or backend as a serivce mai.

  //  we use async await to create a method

  async createAccount({ email, password, Name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        Name
      );

      if (userAccount) {
        // if useracc exist then we call a method
        //    call another method to direct logging in account
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //   another method if user account already exist
  async login({ email, password }) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  //   creating method to get user data at homepage if it is loggedin or not

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Service Error:", error);
    }

    // if there is any error in try catch then we return null
    return null;
  }

  async logout() {
    // eslint-disable-next-line no-useless-catch
    try {
      // if want to delete current session then we write deleteSession('current');
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

// making object and exporting it
const authService = new AuthService();

export default authService;

//authService is a object so whose ever imports and can
// use it like authSerivce.  and after dot which ever
// method it want to used defined in it can use it and can access it.

/*  Note:- ******* logic behind above code ******
we creating account; as a variable only because
we dont want to do a wastage of resources , because
to create account with New Account we before have to
create or to setendpoints , setprojects in client which is a 
wastage of resources .

we want that whenever who create authSerive object then 
client gets created and then access of account would be 
given to that user or person 

when object gets created contructor gets called so we 
create a constructor in class.

*/
