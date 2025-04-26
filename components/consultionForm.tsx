import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  companyName?: string; // New field for company name
  email?: string;
  phone?: string;
  message?: string;
}

const ConsultationForm = () => {
  const t = useTranslations('consultationForm');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '', // New state for company name
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{10,15}$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('errors.firstName.required');
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = t('errors.firstName.tooShort');
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('errors.lastName.required');
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = t('errors.lastName.tooShort');
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = t('errors.companyName.required'); // Validation for company name
    }

    if (!formData.email.trim()) {
      newErrors.email = t('errors.email.required');
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('errors.email.invalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('errors.phone.required');
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = t('errors.phone.invalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('errors.message.required');
    } else if (formData.message.length < 10) {
      newErrors.message = t('errors.message.tooShort');
    } else if (formData.message.length > 500) {
      newErrors.message = t('errors.message.tooLong');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || 'حدث خطأ في إرسال النموذج');
        }

        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '', // Clear company name field
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
        setSubmitSuccess(true);

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError(t('submitError'));
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Scroll to the first error
      const firstErrorField = document.querySelector('.error-field');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Clear success message when user makes changes
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  useEffect(() => {
    // Apply RTL or LTR styles to the form depending on the locale
    const formContainer = document.getElementById('consultation-form-container');
    if (formContainer) {
      formContainer.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [isRTL]);

  return (
    <div id="consultation-form-container" dir={isRTL ? 'rtl' : 'ltr'} className="max-w-4xl mx-auto p-6 lg:p-10 bg-white rounded-3xl shadow-2xl border border-gray-100">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#05509F] mb-4"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>
      </div>

      {/* Success Message */}
      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-green-50 text-green-800 rounded-xl border border-green-200 flex items-center gap-3 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{t('successMessage')}</span>
        </motion.div>
      )}

      {/* Error Message */}
      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-red-50 text-red-800 rounded-xl border border-red-200 flex items-center gap-3 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{submitError}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* First Name and Last Name Fields */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <div className={errors.firstName ? 'error-field' : ''}>
            <label htmlFor="firstName" className={`block text-gray-700 mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('fields.firstName')}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-5 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                errors.firstName
                  ? 'border-red-300 bg-red-50 focus:ring-red-200 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-[#05509F]'
              }`}
              required
              placeholder={t('fields.firstName')}
            />
            {errors.firstName && (
              <p className={`text-red-500 text-sm mt-2 flex items-center gap-1 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <ExclamationCircleIcon className="h-4 w-4 flex-shrink-0" />
                <span>{errors.firstName}</span>
              </p>
            )}
          </div>

          <div className={errors.lastName ? 'error-field' : ''}>
            <label htmlFor="lastName" className={`block text-gray-700 mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('fields.lastName')}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-5 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                errors.lastName
                  ? 'border-red-300 bg-red-50 focus:ring-red-200 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-[#05509F]'
              }`}
              required
              placeholder={t('fields.lastName')}
            />
            {errors.lastName && (
              <p className={`text-red-500 text-sm mt-2 flex items-center gap-1 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <ExclamationCircleIcon className="h-4 w-4 flex-shrink-0" />
                <span>{errors.lastName}</span>
              </p>
            )}
          </div>
        </motion.div>

        {/* Company Name Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={errors.companyName ? 'error-field' : ''}
        >
          <label htmlFor="companyName" className={`block text-gray-700 mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('fields.companyName')}
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-5 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.companyName
                ? 'border-red-300 bg-red-50 focus:ring-red-200 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-200 focus:border-[#05509F]'
            }`}
            required
            placeholder={t('fields.companyName')}
          />
          {errors.companyName && (
            <p className={`text-red-500 text-sm mt-2 flex items-center gap-1 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <ExclamationCircleIcon className="h-4 w-4 flex-shrink-0" />
              <span>{errors.companyName}</span>
            </p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={errors.email ? 'error-field' : ''}
        >
          <label htmlFor="email" className={`block text-gray-700 mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('fields.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-5 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.email
                ? 'border-red-300 bg-red-50 focus:ring-red-200 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-200 focus:border-[#05509F]'
            }`}
            required
            placeholder={t('fields.email')}
          />
          {errors.email && (
            <p className={`text-red-500 text-sm mt-2 flex items-center gap-1 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <ExclamationCircleIcon className="h-4 w-4 flex-shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </motion.div>

        {/* Phone Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className={errors.phone ? 'error-field' : ''}
        >
          <label htmlFor="phone" className={`block text-gray-700 mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('fields.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-5 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.phone
                ? 'border-red-300 bg-red-50 focus:ring-red-200 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-200 focus:border-[#05509F]'
            }`}
            required
            placeholder={t('fields.phone')}
          />
          {errors.phone && (
            <p className={`text-red-500 text-sm mt-2 flex items-center gap-1 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <ExclamationCircleIcon className="h-4 w-4 flex-shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={errors.message ? 'error-field' : ''}
        >
          <label htmlFor="message" className={`block text-gray-700 mb-2 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('fields.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-5 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
              errors.message
                ? 'border-red-300 bg-red-50 focus:ring-red-200 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-200 focus:border-[#05509F]'
            }`}
            required
            placeholder={t('fields.messagePlaceholder')}
          />
          {errors.message && (
            <p className={`text-red-500 text-sm mt-2 flex items-center gap-1 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <ExclamationCircleIcon className="h-4 w-4 flex-shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-white text-lg shadow-lg transition-all ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#05509F] to-[#003366] hover:from-[#034584] hover:to-[#002b55] active:from-[#023b70] active:to-[#002244]'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting && (
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {isSubmitting ? t('submitting') : t('submit')}
            </span>
          </motion.button>
        </motion.div>
      </form>
    </div>
  );
};

export default ConsultationForm;