import {Relationship} from "../../type";
import {RelationshipSchema} from "./RelationshipSchema";


export const findRelativesFromByRelativeId = async(relativeId:number) :Promise<Relationship[]>=>{
  const relationshipList = await RelationshipSchema.findAll({
    where:{
      relativeId: relativeId
    }
  })
  return relationshipList
}
