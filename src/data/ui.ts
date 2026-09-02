// Page chrome for the CV: everything the template says on its own, as opposed
// to the CV content itself, which lives in cv.ts and cv.ru.ts.

export interface Ui {
  lang: string;
  skills: string;
  experience: string;
  projects: string;
  openSource: string;
  publications: string;
  education: string;
  languages: string;
  // "<title> at <company>" and the open-ended end date.
  at: string;
  present: string;
  printHint: string;
  // Label for the link to the same CV in the other language.
  otherLang: string;
}

// One CV, two URLs. Both pages advertise both, so search engines treat them as
// translations rather than duplicates.
export const cvUrls = { en: '/cv', ru: '/ru/cv' } as const;

export const en: Ui = {
  lang: 'en',
  skills: 'Skills',
  experience: 'Experience',
  projects: 'Projects',
  openSource: 'Open source',
  publications: 'Publications',
  education: 'Education',
  languages: 'Languages',
  at: 'at',
  present: 'present',
  printHint: 'Press ⌘P / Ctrl-P for a PDF copy.',
  otherLang: 'Русский',
};

export const ru: Ui = {
  lang: 'ru',
  // Left in English: the section is nothing but technology names anyway.
  skills: 'Skills',
  experience: 'Опыт работы',
  projects: 'Проекты',
  openSource: 'Open source',
  publications: 'Публикации',
  education: 'Образование',
  languages: 'Языки',
  at: 'в',
  present: 'наст. время',
  printHint: 'Нажмите ⌘P / Ctrl-P, чтобы сохранить PDF.',
  otherLang: 'English',
};
