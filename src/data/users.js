const users = [
  {
    email: "john@email.com",
    password: "password",
  },
  {
    email: "busie@email.com",
    password: "password",
  },
  {
    email: "timmy@email.com",
    password: "password",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
