export const script = () => {
  try {
    const documentElement = document.documentElement;
    documentElement.classList.remove('dark');
    documentElement.classList.add('light');
    documentElement.style.colorScheme = 'light';
  } catch (e) {
    console.error(e);
  }
};