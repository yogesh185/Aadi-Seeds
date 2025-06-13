export default function NewsletterSignup() {
  return (
    <section className="max-w-2xl mx-auto bg-white rounded-xl shadow p-4 sm:p-6 mb-8 text-center border border-gray-100">
      <h3 className="font-bold text-lg sm:text-xl mb-2 text-primary-600">
        Sign Up for the AADI Seeds Newsletter
      </h3>
      <form className="flex flex-col sm:flex-row gap-2 justify-center mt-2">
        <input
          className="border border-gray-300 rounded px-3 py-2 flex-1 min-w-0 focus:outline-none focus:ring-2 focus:ring-primary-200 transition"
          placeholder="Your email"
          type="email"
          required
        />
        <button
          type="submit"
          className="btn-primary px-5 py-2 rounded font-semibold text-base"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
