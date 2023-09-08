
// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  uk: () => import('./dictionaries/uk.json').then((module) => module.default),
  pl: () => import('./dictionaries/pl.json').then((module) => module.default),
}

export const getDictionary = async (locale) =>
  dictionaries[locale]?.() ?? dictionaries.uk()