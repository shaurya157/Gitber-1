export const searchUser = (user, success, error) => {
  $.ajax({
    method: "GET",
    url: `https://api.github.com/users/${user}`,
    success,
    error
  });
};

export const getUserRepos = (user, success, error) => {
  $.ajax({
    method: "GET",
    url: `https://api.github.com/users/${user}/repos`,
    success,
    error
  });
}

export const getRepoInfo = (user, repo, success, error) => {
  $.ajax({
    method: "GET",
    url: `https://api.github.com/repos/${user}/${repo}/readme`,
    success,
    error
  })
}

export const searchOrganization = (organization, success, error) => {
  $.ajax({
    method: "GET",
    url: `https://api.github.com/orgs/${organization}/members`,
    success,
    error
  });
};
