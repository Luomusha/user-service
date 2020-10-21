import {Family} from "../../type";
import {FamilySchema} from "./FamilySchema";

export const saveFamily = async(family:Family) => {
    const familyInstance = await FamilySchema.create(family);
    return familyInstance;
}

export const findFamilies = async (): Promise<Family[]> => {
  const families = await FamilySchema.findAll();
  return families
}

export default {

}
