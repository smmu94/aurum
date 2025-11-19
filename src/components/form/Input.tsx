type InputProps = {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function Input({ label, type = "text", name, placeholder = "", value, onChange, required = false }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gunmetal t-small-bold" htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-md p-2 border border-gunmetal bg-gunmetal t-small focus:outline-none focus:ring-2 focus:ring-lion"
      />
    </div>
  );
}