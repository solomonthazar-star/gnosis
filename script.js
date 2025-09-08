// Huge collection of philosophy quotes
const quotes = [
  // Ancient Greek
  "“The unexamined life is not worth living.” — Socrates",
  "“The only true wisdom is in knowing you know nothing.” — Socrates",
  "“At the touch of love, everyone becomes a poet.” — Plato",
  "“The price good men pay for indifference to public affairs is to be ruled by evil men.” — Plato",
  "“The measure of a man is what he does with power.” — Plato",
  "“Knowing yourself is the beginning of all wisdom.” — Aristotle",
  "“Happiness depends upon ourselves.” — Aristotle",
  "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Aristotle",
  "“Man is the measure of all things.” — Protagoras",
  "“One cannot step twice in the same river.” — Heraclitus",
  "“All is flux, nothing stays still.” — Heraclitus",
  "“No man ever steps in the same river twice.” — Heraclitus",

  // Stoics
  "“You have power over your mind — not outside events. Realize this, and you will find strength.” — Marcus Aurelius",
  "“Time is a river, a violent current of events, glimpsed once and already carried past us.” — Marcus Aurelius",
  "“To live happily is an inward power of the soul.” — Marcus Aurelius",
  "“Man conquers the world by conquering himself.” — Zeno of Citium",
  "“If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it.” — Marcus Aurelius",
  "“It is not the man who has too little, but the man who craves more, that is poor.” — Seneca",
  "“Even while they teach, men learn.” — Seneca",
  "“Luck is what happens when preparation meets opportunity.” — Seneca",

  // Hermetic / Thoth / Mystical
  "“As above, so below, as within, so without, as the universe, so the soul.” — Hermes Trismegistus",
  "“That which is Below corresponds to that which is Above.” — Corpus Hermeticum",
  "“The lips of wisdom are closed, except to the ears of understanding.” — Hermes Trismegistus",
  "“If you want to conquer the world, conquer yourself first.” — Thoth (Emerald Tablets)",
  "“The All is Mind; The Universe is Mental.” — Kybalion",
  "“He who understands the truth will find himself immortal.” — Corpus Hermeticum",

  // Renaissance / Enlightenment
  "“It is better to be feared than loved, if you cannot be both.” — Niccolò Machiavelli",
  "“God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us.” — Machiavelli",
  "“Cogito, ergo sum. (I think, therefore I am.)” — René Descartes",
  "“Dare to know! Have the courage to use your own understanding.” — Immanuel Kant",
  "“Man is born free, and everywhere he is in chains.” — Jean-Jacques Rousseau",
  "“I disapprove of what you say, but I will defend to the death your right to say it.” — Voltaire",
  "“The greatest wealth is to live content with little.” — Plato",
  "“Liberty means responsibility. That is why most men dread it.” — George Bernard Shaw",

  // Modern / Existential
  "“He who has a why to live can bear almost any how.” — Friedrich Nietzsche",
  "“God is dead. God remains dead. And we have killed him.” — Friedrich Nietzsche",
  "“To live is to suffer, to survive is to find some meaning in the suffering.” — Friedrich Nietzsche",
  "“Become who you are.” — Friedrich Nietzsche",
  "“Man is condemned to be free.” — Jean-Paul Sartre",
  "“Hell is other people.” — Jean-Paul Sartre",
  "“Life must be understood backward. But it must be lived forward.” — Søren Kierkegaard",
  "“Anxiety is the dizziness of freedom.” — Søren Kierkegaard",
  "“The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.” — Albert Camus",
  "“In the depth of winter, I finally learned that within me there lay an invincible summer.” — Albert Camus",
  "“One is not born, but rather becomes, a woman.” — Simone de Beauvoir",
  "“Change your life today. Don’t gamble on the future, act now, without delay.” — Simone de Beauvoir",

  // Eastern Philosophy
  "“The mind is everything. What you think you become.” — Buddha",
  "“The way is not in the sky. The way is in the heart.” — Buddha",
  "“Three things cannot be long hidden: the sun, the moon, and the truth.” — Buddha",
  "“A man who has committed a mistake and doesn’t correct it is committing another mistake.” — Confucius",
  "“The superior man is modest in his speech, but exceeds in his actions.” — Confucius",
  "“Knowing others is intelligence; knowing yourself is true wisdom.” — Lao Tzu",
  "“A journey of a thousand miles begins with a single step.” — Lao Tzu",
  "“He who conquers others is strong; he who conquers himself is mighty.” — Lao Tzu",

  // Modern Influential
  "“Man suffers only because he takes seriously what the gods made for fun.” — Alan Watts",
  "“The meaning of life is to give life meaning.” — Viktor Frankl",
  "“When we are no longer able to change a situation, we are challenged to change ourselves.” — Viktor Frankl",
  "“Do not pray for an easy life, pray for the strength to endure a difficult one.” — Bruce Lee",
  "“Injustice anywhere is a threat to justice everywhere.” — Martin Luther King Jr.",
  "“The arc of the moral universe is long, but it bends toward justice.” — Martin Luther King Jr.",
  "“Do not go where the path may lead, go instead where there is no path and leave a trail.” — Ralph Waldo Emerson",
  "“What lies behind us and what lies before us are tiny matters compared to what lies within us.” — Ralph Waldo Emerson",
  "“Every man takes the limits of his own field of vision for the limits of the world.” — Arthur Schopenhauer",
  "“Compassion is the basis of morality.” — Arthur Schopenhauer",

  // Gnostic / Mystical
  "“The kingdom of heaven is within you.” — Jesus (Gnostic Gospels)",
  "“If you bring forth what is within you, what you bring forth will save you.” — Gospel of Thomas",
  "“The light shines in the darkness, and the darkness has not overcome it.” — Gospel of John",
  "“Know what is in front of your face, and what is hidden from you will be disclosed to you.” — Gospel of Thomas",

  // Miscellaneous
  "“Power is not revealed by striking hard or often, but by striking true.” — Honoré de Balzac",
  "“He who opens a school door, closes a prison.” — Victor Hugo",
  "“The fault, dear Brutus, is not in our stars, but in ourselves.” — William Shakespeare",
  "“All men are created equal.” — Thomas Jefferson",
  "“Homo homini lupus (Man is a wolf to man).” — Thomas Hobbes",
  "“No man has a good enough memory to be a successful liar.” — Abraham Lincoln",
];

// Random quote system
const container = document.getElementById("quotes-container");
let lastQuote = null;

// Pick a random quote (not the same as last time)
function getRandomQuote() {
  let quote;
  do {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (quote === lastQuote);
  lastQuote = quote;
  return quote;
}

// Add a quote element
function addQuote() {
  const quoteEl = document.createElement("div");
  quoteEl.className = "quote";
  quoteEl.textContent = getRandomQuote();
  container.appendChild(quoteEl);
}

// Load initial batch
for (let i = 0; i < 5; i++) {
  addQuote();
}

// Infinite scroll
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    addQuote();
  }
});
