export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const REQUEST_ORGANIZATION = "REQUEST_ORGANIZATION";
export const RECEIVE_ORGANIZATION = "RECEIVE_ORGANIZATION";

export const requestUser = (user) => ({
  type: REQUEST_USER,
  user
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const requestOrganization = (organization) => ({
  type: REQUEST_ORGANIZATION,
  organization
});

export const receiveOrganization = (organization) => ({
  type: RECEIVE_ORGANIZATION,
  organization
});
