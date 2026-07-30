export function scrollToBooking() {
  const el = document.getElementById("book-demo");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  const nameInput = el.querySelector("input");
  if (nameInput) {
    window.setTimeout(() => nameInput.focus(), 400);
  }
}
