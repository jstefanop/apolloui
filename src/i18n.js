import { i18n } from '@lingui/core';
import { en } from 'make-plural/plurals'

export const defaultLocale = 'en';

i18n.loadLocaleData({
  en: { plurals: en },
})

/**
* We do a dynamic import of just the catalog that we need
* @param locale any locale string
*/
export async function dynamicActivate(locale: string) {
  const { messages } = await import(`@lingui/loader!./locales/${locale}/messages.json`)
  console.log(locale)
  i18n.load(locale, messages)
  i18n.activate(locale)
}