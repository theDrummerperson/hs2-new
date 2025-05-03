'use client';

export default function BurgerButton({ isOpen, toggle }) {
  return (
    <button
      className={`burger z-50 w-10 h-10 flex flex-col justify-center items-center`}
      onClick={toggle}
      aria-label="Toggle menu"
    >
      <span className={`bar ${isOpen ? 'open-top' : ''}`}></span>
      <span className={`bar ${isOpen ? 'open-middle' : ''}`}></span>
      <span className={`bar ${isOpen ? 'open-bottom' : ''}`}></span>
    </button>
  );
}
