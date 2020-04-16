export const removeProduct = (productType, id) => {
    return {
      type: 'REMOVE_PRODUCT',
      payload: {
        productType,
        id,
      },
    };
  };