type SelectProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
};

export default function Select({ label, name, value, onChange, options, required = false }: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gunmetal t-small-bold" htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="rounded-md p-2 border border-gunmetal bg-gunmetal t-small focus:outline-none focus:ring-2 focus:ring-lion"
      >
        <option value="" disabled>Select {label.toLowerCase()}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
