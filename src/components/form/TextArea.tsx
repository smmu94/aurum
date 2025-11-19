type TextAreaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

export default function TextArea({ label, name, value, onChange, placeholder = "" }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gunmetal t-small-bold" htmlFor={name}>{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-md p-2 border border-gunmetal bg-gunmetal t-small focus:outline-none focus:ring-2 focus:ring-lion"
        rows={4}
      />
    </div>
  );
}
