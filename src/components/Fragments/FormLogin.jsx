import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form>
      <InputForm
        label="Email"
        type="email"
        name="username"
        placeholder="email@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="**********"
      />
      <Button classname="bg-blue-500 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
