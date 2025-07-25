import { useState } from 'react';

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#5a3e36] font-serif">
      <header className="bg-white p-6 shadow-md">
        <h1 className="text-4xl font-bold text-center">Prairie-Vu Farm</h1>
        <p className="text-center text-xl mt-2 italic">
          Where Country Charm Meets Elegant Celebrations
        </p>
      </header>
      <main className="max-w-3xl mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-2">About the Venue</h2>
          <p>
            Nestled in the heart of the prairies, Prairie-Vu Farm offers a beautiful rustic setting for weddings and events. Surrounded by natural beauty, our venue features a restored barn, open fields, and charming outdoor spaces.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Wedding Packages</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Classic Package:</strong> Ceremony + Reception in barn (up to 100 guests)</li>
            <li><strong>Premium Package:</strong> Includes bridal suite, outdoor ceremony area, and full-day access</li>
            <li><strong>All-Inclusive:</strong> Full weekend rental + vendor coordination</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <input type="text" placeholder="Your Name" required className="w-full p-2 border border-gray-300" />
              <input type="email" placeholder="Your Email" required className="w-full p-2 border border-gray-300" />
              <textarea placeholder="Message" required className="w-full p-2 border border-gray-300"></textarea>
              <button type="submit" className="bg-[#5a3e36] text-white px-4 py-2">Send Message</button>
            </form>
          ) : (
            <p>Thank you for reaching out! We'll get back to you soon.</p>
          )}
        </section>
      </main>
    </div>
  );
}