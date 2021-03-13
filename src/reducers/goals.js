import { UPDATE_STATUS, ADD_GOAL, DELETE_GOAL } from '../actions/actionTypes';

// initial goal state
const initialState = {
  goals: [],
};

//to update store- actions- add,update,remove goal
export function goals(state = initialState, action) {
  switch (action.type) {
    //add goal
    case ADD_GOAL:
      return {
        goals: [...state.goals, action.goal],
        flag: false,
      };

    //update goal
    case UPDATE_STATUS:
      //update status of goal
      let updated = state.goals.map((goal) => {
        if (goal.title === action.status[1]) {
          goal.status[action.status[2]] = action.status[0];

          if (goal.status[action.status[2]] === 'Done') {
            goal.streak += 1;
          } else if (
            goal.status[action.status[2]] === 'None' ||
            goal.status[action.status[2]] === 'Not-Done'
          ) {
            goal.streak -= 1;
          }
        }
        return goal;
      });
      return {
        goals: updated,
      };

    //delete goal
    case DELETE_GOAL:
      let filtered = state.goals.filter((goal) => goal.key !== action.goal.key);
      return {
        flag: false,
        goals: filtered,
      };
    default:
      return state;
  }
}
