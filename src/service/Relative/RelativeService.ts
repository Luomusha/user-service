import {Relative} from "../../type";
import {RelativeSchema} from "./RelativeSchema";

export const findRelatives = async () => {
  const relatives = await RelativeSchema.findAll();
  return relatives
}

export const saveRelative = async (relative: Relative) => {
  console.log("###", relative)
  try {

    const relativeInstance = await RelativeSchema.create(relative)
    return relativeInstance
  } catch (e) {

    console.log("***", e);
  }
}

export const findRelativeById = async (relativeId:string) => {
  const relative = await RelativeSchema.findByPk(relativeId)
  return relative
}
