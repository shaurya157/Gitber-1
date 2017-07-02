export const searchUser = (user, success, error) => {
  $.ajax({
    method: "GET",
    url: `https://api.github.com/users/${user}`,
    success,
    error
  })
};

export const searchOrganization = (organization, success, error) => {
  $.ajax({
    method: "GET",
    url: `https://api.github.com/users/${user}`,
    success,
    error
  })
};
