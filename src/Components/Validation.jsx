const Validation = (user) => {
  const errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  

  if (user.name === "") {
    errors.name = "name is required";
  }

  if (user.email === "") {
    errors.email = "email is required";
  } else if (!email_pattern.test(user.email)) {
    errors.email = "Please enter a valid email";
  }

  if (user.password === "") {
    errors.password = "Password is required";
  } else if (!password_pattern.test(user.password)) {
    errors.password =
      "Password must have at least one digit, small and capital letter & 8 character ";
  }

  return errors;
}
export default Validation