import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

test('selectCourse action creator returns the correct action', () => {
    const index = 1;
    const expectedAction = {
        type: SELECT_COURSE,
        payload: { index },
    };

    const action = selectCourse(index);

    expect(action).toEqual(expectedAction);
});

// Test for unselectCourse action creator
test('unselectCourse action creator returns the correct action', () => {
    const index = 1;
    const expectedAction = {
        type: UNSELECT_COURSE,
        payload: { index },
    };

    const action = unSelectCourse(index);

    expect(action).toEqual(expectedAction);
});
