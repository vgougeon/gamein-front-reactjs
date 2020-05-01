import store from '../store';
const actions = {
    close: () => {
        store.dispatch({ 
            type: 'POPUP_CLOSE', 
        })
    },
    set: (popup, outclickable = false, blur = false) => {
        store.dispatch({ 
            type: 'POPUP_SET',
            popup: popup,
            outclickable: outclickable,
            blur: blur
        })
    }
}
export default actions;