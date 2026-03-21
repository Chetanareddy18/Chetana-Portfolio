import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "pallachetana@gmail.com",
    link: "mailto:pallachetana@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "palla-chetana-reddy",
    link: "https://www.linkedin.com/in/palla-chetana-reddy/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Chetanareddy18",
    link: "https://github.com/Chetanareddy18",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue();

    if (!token) {
      alert("Please verify reCAPTCHA");
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
      recaptchaRef.current.reset();

      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Email error:", error);
      alert("Failed to send message");
    }
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            {contacts.map((contact, i) => (
              <a key={i} href={contact.link} target="_blank" rel="noreferrer">
                <div className="p-5 border rounded-xl flex items-center gap-4 hover:bg-white/10 transition">
                  <contact.icon />
                  <div>
                    <p className="text-sm text-gray-400">{contact.label}</p>
                    <p className="font-semibold">{contact.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 bg-gray-900 rounded"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-gray-900 rounded"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 bg-gray-900 rounded"
              />

              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
              />

              <button
                type="submit"
                className={`w-full py-3 rounded font-bold ${
                  sent ? "bg-green-600" : "bg-purple-600"
                }`}
              >
                {sent ? "Message Sent ✅" : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}