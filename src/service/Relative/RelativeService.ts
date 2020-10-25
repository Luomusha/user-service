import {Relative} from "../../type";
import {RelativeSchema} from "./RelativeSchema";

export const findRelatives = async () => {
  const relatives = await RelativeSchema.findAll();
  return relatives
}

export const saveRelative = async (relative: Relative) => {
    const relativeInstance = await RelativeSchema.create(relative)
    return relativeInstance
}

export const findRelativeById = async (relativeId:string) => {
  const relative = await RelativeSchema.findByPk(relativeId)
  return relative
}
