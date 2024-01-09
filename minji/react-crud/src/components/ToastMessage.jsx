import { useEffect } from "react";

function ToastMessage({ msg, setToast, color }) {
  useEffect(() => {
    setTimeout(() => setToast(null), 3000);
  }, [setToast]);

  return (
    <div
      className={`w-full ${color} text-xl font-medium text-center p-3 mb-5 text-white`}
    >
      {msg}
    </div>
  );
}

export default ToastMessage;
