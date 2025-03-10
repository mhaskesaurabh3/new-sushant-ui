import Loader from "./Loader";

const Button = ({
  loading,
  children,
  disabled,
  className,
  type = "submit",
  ...props
}) => {
  return (
    <button
      className={`w-full bg-black text-white font-semibold py-3 mt-8 rounded-lg transition duration-300 hover:bg-black
          ${
            disabled || loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-black"
          } 
          ${className}`}
      disabled={disabled || loading}
      type={type || "submit"}
      {...props}
    >
      {loading ? <Loader className={"justify-center py-2"} /> : children}
    </button>
  );
};

export default Button;
