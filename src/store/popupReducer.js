const initialState = {
    popup: null,
    blur: false,
    outClickable: false
}
let popupReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'POPUP_SET':
            return { ...state, popup: action.popup, outClickable: action.outclickable, blur: action.blur}
        case 'POPUP_CLOSE':
            return { ...state, popup: null}
        default:
            return state
    }
}
export default popupReducer;
