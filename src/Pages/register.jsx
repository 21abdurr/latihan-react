import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="flex justify-between my-2 text-slate-600">
        already have an account?
        <Link to="/login">
          <span className="py-[3px] px-4  bg-slate-700 text-white italic rounded-lg">
            Login
          </span>
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
