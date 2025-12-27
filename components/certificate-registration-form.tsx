import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link } from '@/lib/navigation';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  certificate?: string;
  education?: string;
  experience?: string;
}

const CertificateRegistrationForm = () => {
  const t = useTranslations('certificateForm');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    certificate: '',
    education: '',
    experience: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const certificates = [
    { id: 'cma-us', name: t('certificates.cmaUs') },
    { id: 'diploma-ifrs', name: t('certificates.diplomaIfrs') },
    { id: 'fmva', name: t('certificates.fmva') },
    { id: 'fmaa', name: t('certificates.fmaa') }
  ];

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

    if (!formData.certificate) {
      newErrors.certificate = t('errors.certificate.required');
    }

    if (!formData.education.trim()) {
      newErrors.education = t('errors.education.required');
    }

    if (!formData.experience.trim()) {
      newErrors.experience = t('errors.experience.required');
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
        const response = await fetch('/api/certificate-registration', {
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
          email: '',
          phone: '',
          certificate: '',
          education: '',
          experience: ''
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    const formContainer = document.getElementById('certificate-form-container');
    if (formContainer) {
      formContainer.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [isRTL]);

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col items-center gap-8 lg:gap-12 mb-12">
          <div className="flex items-center gap-5">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">{t('sectionBadge')}</span>
            </div>
          </div>

          <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px] text-center">
            {t('sectionTitle')}
          </h2>

          <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
            {t('sectionDescription')}
          </p>
        </div>

        <div id="certificate-form-container" dir={isRTL ? 'rtl' : 'ltr'} className="max-w-4xl mx-auto p-6 lg:p-10 bg-white rounded-3xl shadow-2xl border border-gray-100">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>{submitError}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="relative">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('fields.firstName')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500 error-field' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
                  placeholder={t('placeholders.firstName')}
                />
                {errors.firstName && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-8">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                )}
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="relative">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('fields.lastName')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500 error-field' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
                  placeholder={t('placeholders.lastName')}
                />
                {errors.lastName && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-8">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                )}
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('fields.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 error-field' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
                  placeholder={t('placeholders.email')}
                />
                {errors.email && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-8">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                )}
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('fields.phone')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 error-field' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
                  placeholder={t('placeholders.phone')}
                />
                {errors.phone && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-8">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                )}
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Certificate Selection */}
            <div className="relative">
              <label htmlFor="certificate" className="block text-sm font-medium text-gray-700 mb-1">
                {t('fields.certificate')} <span className="text-red-500">*</span>
              </label>
              <select
                id="certificate"
                name="certificate"
                value={formData.certificate}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.certificate ? 'border-red-500 error-field' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none bg-white`}
              >
                <option value="">{t('placeholders.certificate')}</option>
                {certificates.map(cert => (
                  <option key={cert.id} value={cert.id}>{cert.name}</option>
                ))}
              </select>
              {errors.certificate && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-8">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              )}
              {errors.certificate && (
                <p className="mt-2 text-sm text-red-600">{errors.certificate}</p>
              )}
              {/* Custom dropdown arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-8">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Education Background */}
            <div className="relative">
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                {t('fields.education')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.education ? 'border-red-500 error-field' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
                placeholder={t('placeholders.education')}
              />
              {errors.education && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-8">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              )}
              {errors.education && (
                <p className="mt-2 text-sm text-red-600">{errors.education}</p>
              )}
            </div>

            {/* Work Experience */}
            <div className="relative">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                {t('fields.experience')} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border ${errors.experience ? 'border-red-500 error-field' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition`}
                placeholder={t('placeholders.experience')}
              />
              {errors.experience && (
                <div className="absolute top-10 right-0 flex items-start pr-3 pointer-events-none">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              )}
              {errors.experience && (
                <p className="mt-2 text-sm text-red-600">{errors.experience}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#05509F] hover:bg-[#05509F]/90 text-white font-bold py-3 px-8 rounded-[40px] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('submitting')}
                  </div>
                ) : t('submit')}
              </button>
            </div>

            {/* Terms and Privacy */}
            <div className="text-center text-sm text-gray-500 mt-4">
              <p>
                {t('termsText')}{' '}
                <Link href="/terms" className="text-[#05509F] hover:underline">
                  {t('termsLink')}
                </Link>{' '}
                {t('andText')}{' '}
                <Link href="/privacy" className="text-[#05509F] hover:underline">
                  {t('privacyLink')}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CertificateRegistrationForm;