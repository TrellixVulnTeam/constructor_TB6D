export const selectSection = (section) => {
    alert('your section is: section num' + section.order);
    return {
        type: "ELEMENT_SELECTED",
        payload: section
    }
};