// import { useToast } from "../context/ToastContext";
// import { showNotify } from "../helpers/helper";
import { useEffect } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../helpers/helper";
import { clearToast } from "../redux/slice/toastSlice";

const Dashboard = () => {
  // context
  // const { message, type, setMessage } = useToast();
  // useEffect(() => {
  //   showNotify(message, type, setMessage);
  // }, [message, type, setMessage]);

  // redux
  const { message, type } = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();
  useEffect(() => {
    showToast(message, type);
    dispatch(clearToast());
  }, [message, type]);
  return (
    <>
      <div className="">Dashboard</div>
    </>
  );
};

export default Dashboard;
