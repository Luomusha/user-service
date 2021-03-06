import {User} from "../../type";
import {UserModel} from "./UserSchema";


export const saveUser = async (user:User):Promise<User> => {
  const userInstance = new UserModel(user);
  const result = await userInstance.save();
  return result.toObject()
}



export const findUsers = async ():Promise<User[]> => {
  const userDocuments = await UserModel.find();
  const users = userDocuments.map(user => user.toObject())
  return users
}


