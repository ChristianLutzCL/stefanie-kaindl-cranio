'use client';

import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://n8n.srv1010269.hstgr.cloud/webhook-test/stefanie-kaindl-cranio/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Vielen Dank für Ihre Nachricht! Ich melde mich in Kürze bei Ihnen.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Fehler beim Senden');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt per E-Mail.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="font-inter text-taupe-800 text-sm font-medium mb-2 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-taupe-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#67B1B1] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="font-inter text-taupe-800 text-sm font-medium mb-2 block">
              E-Mail Adresse <span className="text-[#67B1B1]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-taupe-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#67B1B1] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="font-inter text-taupe-800 text-sm font-medium mb-2 block">
            Telefonnummer
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-taupe-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#67B1B1] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="font-inter text-taupe-800 text-sm font-medium mb-2 block">
            Nachricht <span className="text-[#67B1B1]">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-taupe-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#67B1B1] focus:border-transparent transition-all resize-none"
          />
        </div>

        <div className="text-center opacity-60">
          <Typography className="font-inter text-taupe-500 text-[10px]">
            Es gilt unsere{' '}
            <Link href="/datenschutz" className="text-taupe-500 hover:text-[#67B1B1] transition-colors underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </Typography>
        </div>

        {submitStatus.type && (
          <div className={`p-4 rounded-lg border ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <Typography className="font-inter text-sm text-center">
              {submitStatus.message}
            </Typography>
          </div>
        )}

        <div className="text-center pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter font-medium px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
          </button>
        </div>
      </form>
    </div>
  );
}

function Content() {
  return (
    <section className="bg-gradient-to-b from-cream-50 to-cream-100 min-h-screen">
      {/* Hero Section - Image + Address Info */}
      <div className="min-h-screen flex flex-col">
        {/* Hero Image */}
        <div className="relative flex-1 w-full overflow-hidden bg-cream-50">
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/image/kontakt.webp')",
              backgroundPosition: "center 33%",
              backgroundSize: "cover"
            }}
          >
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>

        {/* Address Section */}
        <div className="container mx-auto px-4 max-w-6xl py-12 md:py-16">
          {/* Three Column Info Section */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Adresse */}
          <div>
            <Typography variant="h3" className="font-inter mb-4 text-taupe-700 text-lg md:text-xl font-normal">
              Adresse
            </Typography>
            <div className="space-y-1">
              <Typography className="font-inter text-taupe-600 text-sm md:text-base">
                Bahnstraße 2a
              </Typography>
              <Typography className="font-inter text-taupe-600 text-sm md:text-base">
                85276 Pfaffenhofen a.d. Ilm
              </Typography>
              <Typography className="font-inter text-taupe-600 text-sm md:text-base">
                Ortsteil Uttenhofen
              </Typography>
              <Typography className="font-inter text-taupe-600 text-sm md:text-base">
                0176 63094476
              </Typography>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <Typography variant="h3" className="font-inter mb-4 text-taupe-700 text-lg md:text-xl font-normal">
              Kontakt
            </Typography>
            <div className="space-y-1">
              <Link href="mailto:info@stefanie-kaindl-cranio.de" className="block">
                <Typography className="font-inter text-[#67B1B1] hover:text-[#5a9999] transition-colors text-sm md:text-base underline">
                  info@stefanie-kaindl-cranio.de
                </Typography>
              </Link>
              <Link href="https://instagram.com/stefanie_kaindl_cranio" target="_blank" rel="noopener noreferrer" className="block">
                <Typography className="font-inter text-[#67B1B1] hover:text-[#5a9999] transition-colors text-sm md:text-base underline">
                  Instagram.com/stefanie_kaindl_cranio
                </Typography>
              </Link>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <Typography variant="h3" className="font-inter mb-4 text-taupe-700 text-lg md:text-xl font-normal">
              Öffnungszeiten
            </Typography>
            <div className="space-y-1">
              <Typography className="font-inter text-taupe-600 text-sm md:text-base">
                Mo – Fr nach Terminvereinbarung
              </Typography>
              <Link href="https://calendly.com/stefanie-kaindl-cranio" target="_blank" rel="noopener noreferrer" className="block mt-3">
                <span className="font-inter text-white bg-[#67B1B1] hover:bg-[#5a9999] transition-colors font-medium text-sm md:text-base px-4 py-2 rounded-lg inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  Online Terminkalender
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Contact Form Section - Full Width White Background */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Typography variant="h2" className="font-inter mb-8 md:mb-12 text-taupe-800 text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
            Hast du eine Frage? Ich bin gerne für dich da!
          </Typography>
          
          <ContactForm />
        </div>
      </div>

    </section>
  );
}

export default Content;