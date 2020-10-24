import {Genealogy} from "../../type";
import {GenealogySchema} from "./GenealogySchema";

export const saveGenealogy = async(genealogy:Genealogy) => {
    const genealogyInstance = await GenealogySchema.create(genealogy);
    return genealogyInstance;
}

export const findGenealogies = async (): Promise<Genealogy[]> => {
  const genealogies = await GenealogySchema.findAll();
  return genealogies
}

export default {

}
