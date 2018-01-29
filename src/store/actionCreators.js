export const ADD_SECTION = 'ADD_SECTION';

export function sectionAction(sectionType) {
    return {
        type: ADD_SECTION,
        sectionType
    }
}