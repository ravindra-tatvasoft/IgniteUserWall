import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { Api } from '../../services/api'
import { omit } from "ramda"
/**
 * Model description here for TypeScript hints.
 */
const api = new Api()
api.setup()

export const UserStoreModel = types
  .model("UserStore")
  .props({
    isUserLoading: false,
    hasMoreUser: false,
   userData: types.optional(types.frozen(),[] ),
  //  userData:[],
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    users: flow(function* users(offset: number ) {
      self.isUserLoading = true
      try {
        const data = yield api.getUsers(offset )
        if (data.kind === 'ok') {
          self.userData = [...self.userData,...data.users]
          self.hasMoreUser = data.hasMoreUser
          self.isUserLoading = false
        }
      } catch (error) {
        self.isUserLoading = false
      }
    })
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
* Un-comment the following to omit model attributes from your snapshots (and from async storage).
* Useful for sensitive data like passwords, or transitive state like whether a modal is open.

* Note that you'll need to import `omit` from ramda, which is already included in the project!

*/
 .postProcessSnapshot(omit(["userData",  ]))

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType { }
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType { }
