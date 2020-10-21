import {Relationship} from "../../type";
import {RelationshipSchema} from "./RelationshipSchema";


export const findMembersFromByMemberId = async(memberId:number) :Promise<Relationship[]>=>{
  const relationshipList = await RelationshipSchema.findAll({
    where:{
      memberId: memberId
    }
  })
  return relationshipList
}
