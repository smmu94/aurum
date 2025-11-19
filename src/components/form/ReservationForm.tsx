import { useState } from "react";
import { BRANCHES, GUESTS, INITIAL_FORM, TIMES } from "../../lib/constants/reservations";
import Button from "../ui/Button";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

export default function ReservationForm() {
  const [form, setForm] = useState(INITIAL_FORM);

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setSuccess(true);
    setForm(INITIAL_FORM);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white/80 rounded-xl shadow-md">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input label="Full Name" name="name" placeholder="Ex: John Doe" value={form.name} onChange={handleChange} required />
        <Input label="Email" type="email" name="email" placeholder="Ex: john@example.com" value={form.email} onChange={handleChange} required />
        <Input label="Phone" type="tel" name="phone" placeholder="Ex: +1 (555) 123-4567" value={form.phone} onChange={handleChange} required />
        <Select label="Branch" name="branch" value={form.branch} onChange={handleChange} options={BRANCHES} required />
        <Input label="Date" type="date" name="date" value={form.date} onChange={handleChange} required />
        <Select label="Time" name="time" value={form.time} onChange={handleChange} options={TIMES} required />
        <Select label="Number of Guests" name="guests" value={form.guests} onChange={handleChange} options={GUESTS} required />
      </div>
      <TextArea
        label="Special Requests (Optional)"
        name="specialRequests"
        value={form.specialRequests}
        onChange={handleChange}
        placeholder="Ex: Need a table on the terrace, vegetarian diet, birthday celebration..."
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <span className="flex items-center justify-center">
            <img src="/svgs/spinner.svg" className="animate-spin h-5 w-5 text-gunmetal" alt="Loading" />
          </span>
        ) : (
          "Confirm Reservation"
        )}
      </Button>
      {success && (
        <p className="text-center text-gunmetal t-small-bold mt-2">
          Thank you! We will contact you within 24 hours to confirm your reservation.
        </p>
      )}
    </form>
  );
}