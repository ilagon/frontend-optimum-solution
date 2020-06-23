export function storeInput(...formInputs) {
  return {
    type: "Create",
    payload: {
      phoneNumber: formInputs[0],
      amount: formInputs[1],
      creditCard: formInputs[2],
    },
  };
}
