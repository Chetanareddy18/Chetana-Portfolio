import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

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
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* YOUR SAME INPUTS HERE (no change) */}

      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        ref={recaptchaRef}
      />

      <motion.button type="submit">
        {sent ? "Message Sent ✅" : "Send Message"}
      </motion.button>

    </form>
  );
}