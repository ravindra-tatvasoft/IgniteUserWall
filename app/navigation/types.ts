/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */

export type RootParamList = {
    primaryStack: undefined
    authStack: undefined
}

export type PrimaryParamList = {
    welcome: undefined
    demo: undefined
    user: undefined
}

export type AUthParamList ={

}