let myGlobalVariable = {
  subcourse_id: 0,
  phase_id: 0,
};

export const getGlobalVariable = () => myGlobalVariable;

export const setGlobalVariable = (newValue) => {
  myGlobalVariable = newValue;
};
