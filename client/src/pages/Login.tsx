import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const path = useNavigate();
  const { setMessage } = useToast();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleLogin: SubmitHandler<Inputs> = async (data) => {
    const logged = await login(data);

    setMessage("Đăng nhập thành công", "error");

    logged && path("/dashboard");
  };
  // console.log(watch("example"));
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-lg font-bold mb-8 text-center">Đăng Nhập</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label htmlFor="email" className="d-block text-gray-700 font-bold">
              Email:
            </label>
            <input
              type="text"
              id="email"
              placeholder="email address"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none h-12"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">Vui lòng nhập email</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="d-block text-gray-700 font-bold"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none h-12"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-600">Vui lòng nhập password</span>
            )}
          </div>
          <div className="my-2">
            <button className="w-full bg-blue-500 text-white hover:bg-blue-600 p-3 rounded">
              Đăng nhập
            </button>
          </div>
          <a href="#" className="text-blue-500">
            Quên mật khẩu
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
