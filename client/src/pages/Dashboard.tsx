import { useToast } from "../context/ToastContext";
import { useEffect } from "react";
import { showNotify } from "../helpers/helper";

const Dashboard = () => {
  const { message, type, setMessage } = useToast();
  useEffect(() => {
    showNotify(message, type, setMessage);
  }, [message, type, setMessage]);

  return (
    <>
      <div className="">Dashboard</div>
    </>
  );
};

export default Dashboard;
