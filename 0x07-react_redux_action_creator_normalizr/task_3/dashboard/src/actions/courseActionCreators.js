import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

// Action creators for selecting a course
export const selectCourse = (index) => ({
    type: SELECT_COURSE,
    payload: { index },
});


// Action creators for unselecting a course
export const unselectCourse = (index) => ({
    type: UNSELECT_COURSE,
    payload: { index },
});
