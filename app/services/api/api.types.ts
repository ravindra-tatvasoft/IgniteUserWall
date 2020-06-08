import { GeneralApiProblem } from "./api-problem"

export interface UserItem {
  url: string
}
export interface User {
  
  name: string
  items :UserItem[]
  image :string
}

export type GetUsersResult = { kind: "ok"; users: User[]; hasMoreUser:false } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
