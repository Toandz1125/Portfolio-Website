import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
  otp: string;
}

const PUBLIC_KEY = 'ab9UULwSkKRtXK8OW';
const SERVICE_ID = 'service_mtf070f';
const OTP_TEMPLATE = 'template_ofnhexb';
const CONTACT_TEMPLATE = 'template_8r51d6z';

export default function ContactForm() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    otp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [generatedOTP] = useState(() =>
    Math.floor(100000 + Math.random() * 900000).toString()
  );

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const sendOTP = async () => {
    if (!formData.email || !formData.name) {
      toast.error(t('contact.nameEmailRequired'));
      return;
    }

    try {
      const templateParams = {
        input_email: formData.email,
        input_name: formData.name,
        otp: generatedOTP,
        reply_to: formData.email,
        from_email: formData.email,
      };

      await emailjs.send(SERVICE_ID, OTP_TEMPLATE, templateParams, PUBLIC_KEY);

      setShowOtpInput(true);
      toast.success(t('contact.otpSent'));
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error(t('contact.otpError'));
    }
  };

  const verifyOTP = () => {
    if (formData.otp === generatedOTP) {
      setIsOtpVerified(true);
      toast.success(t('contact.otpVerified'));
      setShowOtpInput(false);
    } else {
      toast.error(t('contact.otpInvalid'));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || !isOtpVerified || !formData.message.trim()) return;

    setIsSubmitting(true);

    try {
      const emailContent = `
Name: {{from_name}}
Email: {{input_email}}

{{message}}

Best wishes, {{from_name}}.
      `;

      const templateParams = {
        from_name: formData.name,
        input_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        from_email: formData.email,
        email_content: emailContent,
      };

      await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE,
        templateParams,
        PUBLIC_KEY
      );

      toast.success(t('contact.success'));
      setFormData({ name: '', email: '', message: '', otp: '' });
      setIsOtpVerified(false);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const isMessageValid = formData.message.trim().length > 0;
  const canSubmit = isOtpVerified && isMessageValid && !isSubmitting;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md space-y-6"
    >
      <Toaster position="top-right" />

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {t('contact.name')}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={t('contact.name')}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {t('contact.email')}
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={t('contact.email')}
            />
          </div>
          <button
            type="button"
            onClick={sendOTP}
            disabled={isOtpVerified}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('contact.sendOTP')}
          </button>
        </div>
      </div>

      {showOtpInput && (
        <div>
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {t('contact.enterOTP')}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="otp"
              value={formData.otp}
              onChange={(e) =>
                setFormData({ ...formData, otp: e.target.value })
              }
              className="block flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={t('contact.otpPlaceholder')}
              maxLength={6}
            />
            <button
              type="button"
              onClick={verifyOTP}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              {t('contact.verifyOTP')}
            </button>
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {t('contact.message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={2}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={t('contact.message')}
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 
                 transition-colors flex items-center justify-center gap-2 
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t('contact.submit')}
          </>
        )}
      </button>

      {/* Status indicators */}
      <div className="flex items-center gap-4 text-sm">
        <div
          className={`flex items-center gap-2 ${
            isOtpVerified ? 'text-green-600' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isOtpVerified ? 'bg-green-600' : 'bg-gray-400'
            }`}
          />
          {t('contact.emailVerified')}
        </div>
        <div
          className={`flex items-center gap-2 ${
            isMessageValid ? 'text-green-600' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isMessageValid ? 'bg-green-600' : 'bg-gray-400'
            }`}
          />
          {t('contact.messageEntered')}
        </div>
      </div>
    </form>
  );
}
