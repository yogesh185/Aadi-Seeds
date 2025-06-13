export default function ContactDetails() {
  return (
    <div className="
      bg-white/95 rounded-2xl shadow-md
      flex flex-col gap-3
      w-full h-full
      p-4 sm:p-6
      justify-center
    ">
      <h3 className="font-bold text-2xl mb-1 text-primary-600">Our Details</h3>
      <div className="text-gray-700 leading-relaxed">
        Shop No.4 Parmar Arcade<br />
        80 Feet Road, Arvind Vihar,<br />
        Baghmugaliya, Bhopal
      </div>
      <div className="text-gray-700">
        <span className="font-semibold">Phone:</span>{" "}
        <a href="tel:+917999198379" className="text-primary-600 hover:underline">+91-7999198379</a>
      </div>
      <div className="text-gray-700">
        <span className="font-semibold">Email:</span>{" "}
        <a href="mailto:aadiseeds2025@gmail.com" className="text-primary-600 hover:underline">aadiseeds2025@gmail.com</a>
      </div>
      <div className="text-gray-700">
        <span className="font-semibold">Hours:</span><br />
        Tue–Sun: 9am–9pm<br />
        Mon: Closed
      </div>
      <div className="rounded-lg overflow-hidden mt-2 w-full">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Aadi Seeds Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.039767863781!2d77.44606807511961!3d23.463993378866655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43b2f3eab8b1%3A0x8d3e2c3e8b0e9d8!2sParmar%20Arcade%2C%2080%20Feet%20Rd%2C%20Arvind%20Vihar%2C%20Baghmugaliya%2C%20Bhopal%2C%20Madhya%20Pradesh%20462043!5e0!3m2!1sen!2sin!4v1717844239752!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[180px] sm:h-[220px] border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
