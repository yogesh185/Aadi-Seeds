import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="
        bg-gradient-to-b from-white to-gray-50
        py-12 sm:py-16
        px-2 sm:px-4
      "
    >
      <div className="
        max-w-5xl mx-auto
        rounded-2xl shadow-xl
        bg-white/90
        grid grid-cols-1 md:grid-cols-2
        gap-8 md:gap-12
        p-4 sm:p-8
        items-stretch
      ">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  );
}
