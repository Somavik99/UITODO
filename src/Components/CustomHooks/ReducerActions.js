const Actions = {
  ADD_TASK: "Add-Task",
  DELETE_TASK: "Delete-Task",
  EDIT_TASK: "Edit-Task",
};

function functionReducer(state, action) {
  switch (action.type) {
    case Actions.ADD_TASK: {
      const NewInputs = { ...action.payload, id: Date.now() };
      // console.log(state);
      return [...state, NewInputs];
    }
    case Actions.DELETE_TASK: {
      if (Array.isArray(state)) {
        return state.filter((data) => data.id !== action.payload.id);
      } else {
        return null;
      }
    }
    case Actions.EDIT_TASK: {
      return state.map((data) => {
        if (data.id === action.payload.id) {
          return action.payload;
        } else {
          return data;
        }
      });
    }
    default: {
      return console.error(action.type);
    }
  }
}

export { functionReducer, Actions };
