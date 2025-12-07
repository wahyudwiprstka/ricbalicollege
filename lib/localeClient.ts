'use client'

export const getLocale = () => {
  const locale = document.cookie.split('; ').find((row) => row.startsWith('locale='))?.split('=')[1];
  return locale;
}

export const changeLanguage = (locale: string | undefined) => {
  document.cookie = `locale=${locale}; path=/`;
  window.location.reload();
}