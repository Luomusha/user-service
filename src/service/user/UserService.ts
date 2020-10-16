import {User} from "../../type";
import {UserModel} from "./UserSchema";


export const saveUser = async (user:User):Promise<User> => {
  const userInstance = new UserModel(user);
  const result = await userInstance.save();
  return result.toObject()
}

