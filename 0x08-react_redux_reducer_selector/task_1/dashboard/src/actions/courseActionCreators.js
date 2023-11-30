import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

// Action creators
export function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        payload: { index },
    };
}

export function unSelectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        payload: { index },
    };
}

// Create bound action creators
export const boundSelectCourse = (index) => selectCourse(index);
export const boundUnselectCourse = (index) => unSelectCourse(index);
