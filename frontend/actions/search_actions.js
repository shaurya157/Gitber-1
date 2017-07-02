export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const REQUEST_ORGANIZATION = "REQUEST_ORGANIZATION";
export const RECEIVE_ORGANIZATION = "RECEIVE_ORGANIZATION";
export const REQUEST_REPO = "REQUEST_REPO";
export const RECEIVE_REPO = "RECEIVE_REPO";
export const RECEIVE_USER_REPOS = "RECEIVE_USER_REPOS";
export const REQUEST_USER_REPOS = "REQUEST_USER_REPOS";

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

export const requestRepo = (user, repo) => ({
  type: REQUEST_REPO,
  user,
  repo
})

export const receiveRepo = (repos) => ({
  type: RECEIVE_REPO,
  repos
})

export const requestUserRepos = (user) => ({
  type: REQUEST_USER_REPOS,
  user
})

export const receiveUserRepos = (repos) => ({
  type: RECEIVE_USER_REPOS,
  repos
})
