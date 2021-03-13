import { UPDATE_STATUS, ADD_GOAL, DELETE_GOAL } from './actionTypes';

//update status
export function updateStatus(status) {
  return {
    type: UPDATE_STATUS,
    status,
  };
}

//add goal
export function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  };
}

//delete goal
export function deleteGoal(goal) {
  return {
    type: DELETE_GOAL,
    goal,
  };
}
