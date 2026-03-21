import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pallachetaan@gmail.com',
    link: 'mailto:pallachetaan@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'palla-chetana-reddy',
    link: 'https://www.linkedin.com/in/palla-chetana-reddy/'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Chetanareddy18',
    link: 'https://github.com/Chetanareddy18'
  }
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue();

    if (!token) {
      alert("Please verify reCAPTCHA");
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );

      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
      recaptchaRef.current.reset();

      setTimeout(() => setSent(false), 4000);

    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-brand-deep/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-cyan-400">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Interested in collaborating on AI solutions or data science projects? Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-brand-purple/50 hover:bg-white/10 transition-all group border border-white/5"
              >
                <div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple group-hover:scale-110 group-hover:bg-brand-purple group-hover:text-white transition-all">
                  <contact.icon className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-slate-400">{contact.label}</h3>
                  <p className="text-base font-semibold text-white group-hover:text-brand-purple transition-colors truncate">{contact.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
          >

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder=" "
                    className="peer w-full px-5 pt-6 pb-2 rounded-xl bg-brand-deep/80 border border-white/10 text-white"
                  />
                  <label className="absolute left-5 top-2 text-xs text-slate-400">
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder=" "
                    className="peer w-full px-5 pt-6 pb-2 rounded-xl bg-brand-deep/80 border border-white/10 text-white"
                  />
                  <label className="absolute left-5 top-2 text-xs text-slate-400">
                    Your Email
                  </label>
                </div>

              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows="5"
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder=" "
                  className="peer w-full px-5 pt-6 pb-2 rounded-xl bg-brand-deep/80 border border-white/10 text-white resize-none"
                />
                <label className="absolute left-5 top-2 text-xs text-slate-400">
                  Message
                </label>

                {!message && (
                  <span className="absolute left-5 top-12 text-slate-500 text-sm pointer-events-none">
                    Discuss your idea, collaboration, or project...
                  </span>
                )}
              </div>

              {/* CAPTCHA */}
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                ref={recaptchaRef}
              />

              {/* Button */}
              <motion.button
                type="submit"
                className={`w-full py-4 rounded-xl font-bold ${
                  sent ? 'bg-green-600' : 'bg-brand-purple'
                } text-white`}
              >
                {sent ? (
                  <><CheckCircle className="inline w-5 h-5" /> Message Sent</>
                ) : (
                  <><Mail className="inline w-5 h-5" /> Send Message</>
                )}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}