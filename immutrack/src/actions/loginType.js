export const PARENT = "PARENT";
export const PROVIDER = "PROVIDER";

export const loginParent = payload => {
  return {
    type: PARENT,
    payload: "parents"
  };
};

export const loginProvider = payload => {
  return {
    type: PROVIDER,
    payload: "providers"
  };
};
