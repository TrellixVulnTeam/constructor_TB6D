import {
    ADD_SECTION,
    PAGES_FILTER,
    Pages
} from './actionCreators';

// Add section reducer
// export function sectionReducer(state, action) {
//     if(typeof state === 'undefined') return 0;
//
//     switch (action.type) {
//
//         case ADD_SECTION:
//             return {
//                 ...state,
//                 addSection: action.addSection + 1
//             }
//     }
// }

// Switch page reducer
export function switchReducer(state, action) {
    if(typeof state === 'undefined') return 'RENDER_CONSTRUCTOR';

    switch (action.type) {

        case PAGES_FILTER:
            return {
                ...state,
                filter: action.filter
            }
    }
}