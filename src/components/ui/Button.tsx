interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  style?: "primary" | "secondary";
}

const Button = ({ children, onClick, href, style = "primary" }: ButtonProps) => {
  const baseClasses = "px-8 py-2 rounded-sm t-button transition-colors duration-200 hover:scale-103";
  const styleClasses =
    style === "primary"
      ? "bg-lion text-gunmetal"
      : "bg-gunmetal text-lion";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${styleClasses}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${styleClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
