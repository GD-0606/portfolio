export const handleOnClick = (e: React.MouseEvent, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const target = e.target as HTMLElement;
  const anchor = target.closest('a');

  if (!anchor) return;
  const href = anchor.getAttribute('href');
  if (!href) return;

  if (href.includes('.pdf') || href.startsWith('http')) {
    window.open(href, '_blank');
    return;
  }
  if (!href.startsWith('#')) return;
  e.preventDefault();
  setIsMenuOpen(false);

  // find the section related to the href
  const section = document.querySelector(href);
  if (!section) return;
  const NAVBAR_OFFSET = 100;
  const top = section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({
    top,
    behavior: 'smooth'
  });
};
