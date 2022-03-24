import produce from "immer";
import { ActionType } from "../action-types";
import { Action, BundleCompleteAction, BundleStartAction } from "../actions";
import { Reducer } from "redux";

interface BundlesState {
  [id: string]: {
    loading: boolean;
    code: string;
    err: string;
  };
}

const initialState: BundlesState = {};

const reducer = produce<BundlesState, [Action]>(
  (state: BundlesState = initialState, action: Action): BundlesState => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        state[action.payload.cellId] = {
          loading: true,
          code: "",
          err: "",
        };
        return state;
      case ActionType.BUNDLE_COMPLETE:
        state[action.payload.cellId] = {
          loading: false,
          code: action.payload.bundle.code,
          err: action.payload.bundle.err,
        };
        return state;
      default:
        return state;
    }
  }
);

export default reducer;
