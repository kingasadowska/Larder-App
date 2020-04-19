export const removeProduct = (productType, id) => {
    return {
      type: 'REMOVE_PRODUCT',
      payload: {
        productType,
        id,
      },
    };
  };

  export const addProduct = (productType, productContent) => {
    const getId = () =>
      `_${Math.random()
        .toString(36)
        .substr(2, 9)}`;
  
    return {
      type: 'ADD_PRODUCT',
      payload: {
        productType,
        product: {
          id: getId(),
          ...productContent,
        },
      },
    };
  };