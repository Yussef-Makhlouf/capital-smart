'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
      newErrors.firstName = 'الرجاء إدخال الاسم الأول';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'يجب أن يكون الاسم الأول أكثر من حرفين';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'الرجاء إدخال الاسم الأخير';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'يجب أن يكون الاسم الأخير أكثر من حرفين';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'الرجاء إدخال البريد الإلكتروني';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح. مثال: example@domain.com';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'الرجاء إدخال رقم الهاتف';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'رقم الهاتف غير صحيح. يجب أن يكون بين 10 و 15 رقماً';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'الرجاء إدخال رسالتك';
    } else if (formData.message.length < 10) {
      newErrors.message = 'يجب أن تكون الرسالة أكثر من 10 أحرف';
    } else if (formData.message.length > 500) {
      newErrors.message = 'يجب أن تكون الرسالة أقل من 500 حرف';
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
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
        setSubmitSuccess(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.');
      } finally {
        setIsSubmitting(false);
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">حجز استشارة</h2>
        <p className="text-gray-600 mb-6">احصل على نصائح وخدمات تجارية من خبراء.</p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">استشارة افتراضية مجانية</h3>
          <p className="text-gray-700">
            احجز بعض الوقت معنا لمناقشة كيف يمكننا خدمة مجتمعكم ! المدة: 30 دقيقة · السعر: مجاني
          </p>
        </div>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-right">
          تم إرسال النموذج بنجاح! سنتواصل معك قريباً.
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg text-right">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-right text-gray-700 mb-2">الاسم الأول</label>
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.firstName ? 'border-red-500 pr-10' : 'border-gray-300'
                }`}
                required
              />
              {errors.firstName && (
                <ExclamationCircleIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
              )}
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1 text-right flex items-center gap-1">
                <ExclamationCircleIcon className="h-4 w-4" />
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-right text-gray-700 mb-2">الاسم الأخير</label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.lastName ? 'border-red-500 pr-10' : 'border-gray-300'
                }`}
                required
              />
              {errors.lastName && (
                <ExclamationCircleIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
              )}
            </div>
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1 text-right flex items-center gap-1">
                <ExclamationCircleIcon className="h-4 w-4" />
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-right text-gray-700 mb-2">البريد الإلكتروني</label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? 'border-red-500 pr-10' : 'border-gray-300'
              }`}
              required
            />
            {errors.email && (
              <ExclamationCircleIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
            )}
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 text-right flex items-center gap-1">
              <ExclamationCircleIcon className="h-4 w-4" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-right text-gray-700 mb-2">الهاتف المحمول</label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.phone ? 'border-red-500 pr-10' : 'border-gray-300'
              }`}
              required
            />
            {errors.phone && (
              <ExclamationCircleIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
            )}
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 text-right flex items-center gap-1">
              <ExclamationCircleIcon className="h-4 w-4" />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-right text-gray-700 mb-2">الرسالة</label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.message ? 'border-red-500 pr-10' : 'border-gray-300'
              }`}
              required
            />
            {errors.message && (
              <ExclamationCircleIcon className="absolute right-3 top-3 h-5 w-5 text-red-500" />
            )}
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1 text-right flex items-center gap-1">
              <ExclamationCircleIcon className="h-4 w-4" />
              {errors.message}
            </p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
        </motion.button>
      </form>
    </div>
  );
};

export default ConsultationForm;
