import { useCallback, useState } from 'react';

const useCookie = (
  cookieName: string,
): [string | undefined, (value: string, options?: CookieOptions) => void, () => void] => {
  const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  const [cookieValue, setCookieValue] = useState<string | undefined>(getCookie(cookieName));

  const updateCookie = useCallback(
    (value: string, options: CookieOptions = {}): void => {
      const { maxAge, expires, path, domain, secure } = options;
      let cookieString = `${cookieName}=${encodeURIComponent(value)}`;
      if (maxAge) cookieString += `; max-age=${maxAge}`;
      if (expires) cookieString += `; expires=${expires.toUTCString()}`;
      if (path) cookieString += `; path=${path}`;
      if (domain) cookieString += `; domain=${domain}`;
      if (secure) cookieString += `; secure`;
      document.cookie = cookieString;
      setCookieValue(value);
    },
    [cookieName],
  );

  const deleteCookie = useCallback((): void => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setCookieValue(undefined);
  }, [cookieName]);

  return [cookieValue, updateCookie, deleteCookie];
};

export default useCookie;

interface CookieOptions {
  maxAge?: number;
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
}
