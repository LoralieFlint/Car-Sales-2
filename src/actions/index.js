export const removeFeature = feature => {
    return {
      type: "REMOVE_FEATURE",
      payload: feature
    };
  };
  
  export const buyItem = feature => {
    return {
      type: "BUY_ITEM",
      payload: feature
    };
  };