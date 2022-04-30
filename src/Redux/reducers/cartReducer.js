import * as actions from '../constans/cartConstants'


export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_TO_CART:
            return action.payload.number

        case actions.REMOVE_TO_CART:
            return action.payload.number

        default:
        return state
    }


}
           