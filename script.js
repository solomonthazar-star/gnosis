// Array of philosophy quotes
const quotes = [
  "“The unexamined life is not worth living.” — Socrates",
  "“That which is Below corresponds to that which is Above.” — Corpus Hermeticum",
  "“At the touch of love, everyone becomes a poet.” — Plato",
  "“It is better to be feared than loved, if you cannot be both.” — Machiavelli",
  "“He who has a why to live can bear almost any how.” — Nietzsche",
  "“You have power over your mind — not outside events. Realize this, and you will find strength.” — Marcus Aurelius",
  "“Man is the measure of all things.” — Protagoras",
  "“God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us.” — Machiavelli",
  "“To live happily is an inward power of the soul.” — Marcus Aurelius",
  "“As above, so below, as within, so without, as the universe, so the soul.” — Hermes Trismegistus",
  // Add as many more as you like!
];

const container = document.getElementById("quotes-container");
let index = 0;

// Function to add a new quote
function addQuote() {
  const quoteEl = document.createElement("div");
  quoteEl.className = "quote";
  quoteEl.textContent = quotes[index];
  container.appendChild(quoteEl);

  // Cycle index
  index = (index + 1) % quotes.length;
}

// Load initial quotes
for (let i = 0; i < 5; i++) {
  addQuote();
}

// Infinite scroll
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    addQuote();
  }
});
