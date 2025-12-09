export const initialState = {
  showSuccess: false,
};

export function contactReducer(state, action) {
  switch (action.type) {
    case "submitSuccess":
      return { ...state, showSuccess: true };

    case "hideSuccess":
      return { ...state, showSuccess: false };

    case "resetForm":
      return initialState;

    default:
      return state;
  }
}
