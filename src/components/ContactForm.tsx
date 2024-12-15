import React, { useState } from 'react';
import { cn } from '../utils/cn';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import brighterMind4 from '../assets/Brighter Mind 4.png';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Form */}
          <div className="relative z-10">
            <div className="max-w-xl">
              <h2 className="section-title">Let's Get Started</h2>
              <p className="text-gray-600 text-lg mb-8">
                Ready to see how AI can transform your business or personal life? Reach out today for a free consultation.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus !== 'idle' && (
                    <div className={cn(
                      "p-4 rounded-lg transition-all",
                      submitStatus === 'success' ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    )}>
                      <div className="flex items-center space-x-2">
                        {submitStatus === 'success' ? (
                          <>
                            <CheckCircle2 className="h-5 w-5" />
                            <span>Message sent successfully!</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-5 w-5" />
                            <span>Failed to send message. Please try again.</span>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "input-field",
                        errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500"
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "input-field",
                        errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={cn(
                        "input-field",
                        errors.subject && "border-red-500 focus:border-red-500 focus:ring-red-500"
                      )}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={cn(
                        "input-field resize-none",
                        errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500"
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative hidden md:block">
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-[100%] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-full blur-2xl" />
              <img
                src={brighterMind4}
                alt="Contact Brighter Mind"
                className="relative w-full h-full object-cover rounded-full shadow-xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}