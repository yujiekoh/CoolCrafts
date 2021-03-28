export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            // logic for adding item to basket
            // What you return here is what the new data layer will look like. Whenever you dispatch an action into the data layer, you need to return what the new data layer will look like
            return {
                ...state,
               basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            // logic for removing item from basket
            let newBasket = [...state.basket];
            const index = newBasket.findIndex(item => item.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn("can't remove item as it's not in the basket");
            }
            return {
              ...state,
              basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;