import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        label="Full Name"
        type="text"
        name="fullname"
        placeholder="Insert your name here ...."
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        name="Confirm Password"
        placeholder="**********"
      />
      <Button classname="bg-slate-700 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
