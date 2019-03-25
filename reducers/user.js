import { SET_USER, SET_MODAL, TAB_BAR_SCREEN } from '../utilities/keys';

const initialState = {
  user: {},
  accountModal: false,
  tabBar: 'main'
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case SET_MODAL:
      return { ...state, accountModal: action.value };
    case TAB_BAR_SCREEN:
      return { ...state, tabBar: action.value };
    default:
      return state;
  }
}
