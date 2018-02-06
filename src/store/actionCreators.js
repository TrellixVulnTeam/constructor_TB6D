// Add sections action
// export const ADD_SECTION = 'ADD_SECTION';
//
// export function sectionAction(addSection) {
//     return {
//         type: ADD_SECTION,
//         addSection
//     }
// }

// Switch pages action
export const PAGES_FILTER = 'PAGES_FILTER';

export const Pages = {
    RENDER_PROFILE: 'RENDER_PROFILE',
    RENDER_CONSTRUCTOR: 'RENDER_CONSTRUCTOR',
    RENDER_SIGN: 'RENDER_SIGN',
    RENDER_PAYMENT: 'RENDER_PAYMENT'
};

export function switchAction(filter) {
    return {
        type: PAGES_FILTER,
        filter
    }
}