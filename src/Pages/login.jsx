import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <AuthLayout title="login">
      <FormLogin />

      <p className="flex justify-between my-2 text-slate-600">
        don't have an account?{" "}
        <Link to="/register">
          <span className="py-[3px] px-4  bg-slate-700 text-white italic rounded-lg">
            Sign Up
          </span>
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
