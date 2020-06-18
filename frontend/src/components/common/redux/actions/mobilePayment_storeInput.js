export function storeInput(...formInputs) {
  return {
    type: "Create",
    payload: {
      amount: formInputs[0],
      creditCard: formInputs[1],
    },
  };
}

export function storePayee(... formInputs){
  return {
    type: "StorePayee",
    payload: {
      payee: formInputs[0]
    }
  }
}
