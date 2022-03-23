export default function validate(errors, name, value){
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/;
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    switch (name) {
        case "username":
          errors.username = value.length < 6 ? "Username cannot be less than 6 characters" : "";
          break;
        case "email":
          errors.email = validateEmail(value) ? "" : "Email is not valid";
          break;
        case "password":
          let password;
          if (value.length < 6) {
            password = "Password can't be less than 6 characters";
          }
          if (!re.test(value)) {
            password =
              "Password needs to have at least one letter, special character and a number";
          }
          errors.password = password          
          break;
        default:
          break;
      }
}