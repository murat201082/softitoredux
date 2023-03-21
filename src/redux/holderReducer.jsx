const initialState = {
    quantity :10
};

export const holderReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'increment':
            
            return {
                quantity : state.quantity + 1
            }
        case 'decrement':
            
            return {
                quantity : state.quantity - 1
            }
    
        default:
         return state;   
    }
    
}