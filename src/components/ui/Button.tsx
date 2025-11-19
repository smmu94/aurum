interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  link?: {
    href: string;
    target?: string;
    rel?: string;
  };
  style?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button = ({ children, onClick, link, style = "primary", type = "button", disabled = false }: ButtonProps) => {
  const baseClasses =
    "px-8 py-2 rounded-sm t-button transition-colors duration-200 hover:scale-103 whitespace-nowrap cursor-pointer";
  const styleClasses =
    style === "primary"
      ? "bg-lion text-gunmetal"
      : "bg-gunmetal text-lion";
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  if (link?.href) {
    return (
      <a
        href={link.href}
        target={link.target}
        rel={link.rel}
        className={`${baseClasses} ${styleClasses} ${disabledClasses}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${styleClasses} ${disabledClasses}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
