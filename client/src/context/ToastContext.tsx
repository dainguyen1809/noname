import { createContext, useState, ReactNode, useContext } from "react";

export type ToastType = "success" | "error" | "warning" | null;

interface ToastContextType {
  message: string;
  type: ToastType;
  setMessage: (message: string, type?: ToastType) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [message, setToastMessage] = useState<string>("");
  const [type, setType] = useState<ToastType>(null);

  const setMessage = (message: string, type?: ToastType) => {
    setToastMessage(message);
    setType(type || null);
  };

  return (
    <ToastContext.Provider value={{ message, type, setMessage }}>
      {children}
    </ToastContext.Provider>
  );
};

// custom hook

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Đã có lỗi xảy ra");
  }

  return context;
};
