
export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
      { const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: Math.min(newItems[existingIndex].quantity + 1, action.payload.maxQuantity)
        };
        return { ...state, items: newItems };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }; }
      
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };

      case 'INCREMENT_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.min(item.quantity + 1, item.maxQuantity) }
              : item
          ),
        };
        
        case 'DECREMENT_QUANTITY':
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                : item
            ).filter(item => item.quantity > 0),
          };
        
        case 'CLEAR_CART':
          return {
            ...state,
            items: [],
          };
        
        default:
          return state;
      }
  };