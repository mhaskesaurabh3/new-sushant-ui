import { toast } from "react-toastify";

const CustomToast = ({ message, type }) => (
  <div className="p-3 text-lg  bg-white text-black rounded-lg justify-center flex items-center gap-3">
    {type == "success" ? (
      <span>✅</span>
    ) : type === "error" ? (
      <span>❌</span>
    ) : type === "default" ? (
      <span>ℹ️</span>
    ) : null}
    <p className="text-base font-normal">
      {type !== "error"
        ? message
        : message.data?.message ||
          message?.response?.data.msg ||
          "Error occured"}
    </p>
  </div>
);

// Function to show toast
const showCustomToast = (message, type = "default") => {
  toast(<CustomToast message={message} type={type} />, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default showCustomToast;
