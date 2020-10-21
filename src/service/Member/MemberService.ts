import {Member} from "../../type";
import {MemberSchema} from "./MemberSchema";

export const saveMember = async (member: Member) => {
    const memberInstance = await MemberSchema.create(member)
    return memberInstance
}

export const findMemberById = async (memberId:string) => {
  const member = await MemberSchema.findByPk(memberId)
  return member
}
