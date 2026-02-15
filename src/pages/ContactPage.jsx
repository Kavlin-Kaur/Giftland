import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated submission
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus(''), 4000);
  };

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-80 bg-linear-to-r from-himachali-maroon via-himachali-red to-himachali-orange mb-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-white/90 max-w-2xl text-center">
            Visit us in Shimla or reach out anytime—we're here to help
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Store Location */}
            <div className="bg-white rounded-lg p-6 card-shadow geometric-border">
              <div className="flex items-start gap-4">
                <div className="text-himachali-red mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink mb-2">Visit Our Store</h3>
                  <p className="text-muted leading-relaxed">
                    TriJas Shawls & Textiles<br />
                    Lakkar Bazar<br />
                    Near Tripti Restaurant<br />
                    Shimla, Himachal Pradesh 171001
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg p-6 card-shadow">
              <div className="flex items-start gap-4">
                <div className="text-himachali-orange mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink mb-2">Call Us</h3>
                  <p className="text-muted">+91 177 2652 XXX</p>
                  <p className="text-muted">+91 98160 XXXXX</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg p-6 card-shadow">
              <div className="flex items-start gap-4">
                <div className="text-himachali-maroon mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink mb-2">Email Us</h3>
                  <p className="text-muted">contact@trijas.com</p>
                  <p className="text-muted">shop@trijas.com</p>
                </div>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-white rounded-lg p-6 card-shadow">
              <div className="flex items-start gap-4">
                <div className="text-himachali-gold mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink mb-2">Store Hours</h3>
                  <div className="text-muted space-y-1">
                    <p className="flex justify-between">
                      <span>Mon - Sat:</span>
                      <span className="font-semibold">10:00 AM - 8:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">11:00 AM - 7:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg p-6 card-shadow">
              <h3 className="font-bold text-lg text-ink mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-himachali-red text-white hover:bg-himachali-maroon transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-himachali-orange text-white hover:bg-himachali-red transition"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 sm:p-12 card-shadow geometric-border">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-6">
                Send Us a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-himachali-red"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-himachali-red"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-himachali-red"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-ink mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-himachali-red"
                    >
                      <option value="">Select a topic</option>
                      <option value="product">Product Inquiry</option>
                      <option value="order">Order Status</option>
                      <option value="custom">Custom Orders</option>
                      <option value="wholesale">Wholesale Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-himachali-red resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-himachali-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-himachali-maroon transition flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg overflow-hidden card-shadow geometric-border">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-4">
              Find Us in the Heart of Shimla
            </h2>
            <p className="text-muted mb-6">
              Located in the bustling Lakkar Bazar, just steps from Tripti Restaurant. 
              We're easy to find—look for the shop with shawls in every color of the Himalayas!
            </p>
          </div>
          <div className="w-full h-96 bg-gray-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.3!2d77.173409!3d31.103705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057858f36e8b93%3A0x6e68e2bd0a13cbd8!2sLakkar%20Bazaar%2C%20Shimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TriJas Location - Lakkar Bazar, Shimla"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
