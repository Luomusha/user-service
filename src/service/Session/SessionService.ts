import {redis} from "../../db";

export const saveSession = (session) => {
  redis.set('session', session)
}
