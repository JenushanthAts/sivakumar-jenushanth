import { FC, useEffect } from "react";

interface ToastProps {
  type?: "success" | "error";
  message: string;
  onClose?: () => void;
  duration?: number;
}

const Toast: FC<ToastProps> = ({
  type = "success",
  message,
  onClose,
  duration = 3000, // default auto-close after 3 seconds
}) => {
  const isSuccess = type === "success";

  const icon = isSuccess ? (
    // ✅ Success Icon (checkmark)
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  ) : (
    // ❌ Error Icon (cross)
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.54 13.54a1 1 0 0 1-1.42 0L10 11.42l-2.12 2.12a1 1 0 0 1-1.42-1.42L8.58 10 6.46 7.88a1 1 0 0 1 1.42-1.42L10 8.58l2.12-2.12a1 1 0 0 1 1.42 1.42L11.42 10l2.12 2.12a1 1 0 0 1 0 1.42Z" />
    </svg>
  );

  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-6 inset-x-0 flex justify-center z-50">
      <div
        className={`flex items-center w-full max-w-xs p-4 rounded-lg shadow-sm transition-all transform animate-slide-up
          ${
            isSuccess ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
          }`}
        role="alert"
      >
        <div
          className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg
            ${
              isSuccess
                ? "text-green-500 bg-green-100"
                : "text-red-500 bg-red-100"
            }`}
        >
          {icon}
          <span className="sr-only">
            {isSuccess ? "Success icon" : "Error icon"}
          </span>
        </div>
        <div className="ms-3 text-sm font-slate">{message}</div>
        <button
          onClick={onClose}
          className="ms-auto -mx-1.5 -my-1.5 bg-transparent text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
          aria-label="Close"
        >
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
