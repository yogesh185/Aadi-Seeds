import { useState } from "react";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Name is required";
    if ("email" in fieldValues)
      temp.email = !fieldValues.email
        ? "Email is required"
        : !emailRegex.test(fieldValues.email)
        ? "Email is not valid"
        : "";
    if ("message" in fieldValues)
      temp.message = fieldValues.message ? "" : "Message is required";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    validate({ ...values, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validate(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (validate()) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSuccess(true);
        setValues({ name: "", email: "", message: "" });
        setTouched({});
      }, 1200);
    }
  };

  return (
    <form
      className="
        bg-white/95 rounded-2xl shadow-md
        flex flex-col gap-4
        w-full h-full
        p-4 sm:p-6
        justify-center
      "
      onSubmit={handleSubmit}
      noValidate
    >
      <h3 className="font-bold text-2xl mb-2 text-primary-600">Contact Us</h3>
      <div className="flex flex-col gap-1">
        <input
          className={`
            border rounded px-3 py-2 focus:outline-none focus:ring-2 transition
            ${errors.name && touched.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-primary-200"}
          `}
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          autoComplete="name"
        />
        {errors.name && touched.name && (
          <span className="text-xs text-red-500">{errors.name}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <input
          className={`
            border rounded px-3 py-2 focus:outline-none focus:ring-2 transition
            ${errors.email && touched.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-primary-200"}
          `}
          placeholder="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          autoComplete="email"
        />
        {errors.email && touched.email && (
          <span className="text-xs text-red-500">{errors.email}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <textarea
          className={`
            border rounded px-3 py-2 focus:outline-none focus:ring-2 transition resize-none
            ${errors.message && touched.message ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-primary-200"}
          `}
          placeholder="Message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.message && touched.message && (
          <span className="text-xs text-red-500">{errors.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="btn-primary w-full py-2 rounded font-semibold disabled:opacity-60"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
      {success && (
        <div className="text-green-600 text-center text-sm mt-2">
          Thank you! Your message has been sent.
        </div>
      )}
    </form>
  );
}
