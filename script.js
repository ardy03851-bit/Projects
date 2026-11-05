// Let visitors mark the age group they are packing for.
document.querySelectorAll('.age-option').forEach((option) => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.age-option').forEach((item) => {
      const isSelected = item === option;
      item.classList.toggle('is-selected', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });
  });
});
