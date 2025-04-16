import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <div className="flex items-center space-x-2">
      <Link
        href={{ pathname, query }}
        as={asPath}
        locale="en"
        className={`px-3 py-1 rounded ${
          router.locale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        EN
      </Link>
      <Link
        href={{ pathname, query }}
        as={asPath}
        locale="ar"
        className={`px-3 py-1 rounded ${
          router.locale === 'ar' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        عربي
      </Link>
    </div>
  );
};

export default LanguageSwitcher; 