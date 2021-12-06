import * as actions from './profileActionCreators';
//through  enum don`t work - only constant text and as const
type ActionType=typeof actions;
type KeysActionType=keyof ActionType;
type ActionCreatorType=ActionType[KeysActionType];
export type ActionProfileType=ReturnType<ActionCreatorType>
