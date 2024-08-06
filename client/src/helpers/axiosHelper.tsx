import { toast } from "react-toastify";

const errorMessage = (error: any) => {
  const errorMessage =
    error.response?.data?.error || "Đã xảy ra lỗi trong quá trình đăng nhập";
  toast.error(errorMessage);
};

export { errorMessage };
