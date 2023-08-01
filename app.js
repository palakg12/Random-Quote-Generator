const quotes = [
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
      quote: "The way to get started is to quit talking and begin doing. ",
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
    },
    {
      quote:
        "If life were predictable it would cease to be life, and be without flavor.",
    },
    {
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    },
    {
      quote:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    },
    {
      quote: "Life is what happens when you're busy making other plans. ",
    },
  ];

const generateQuotes = function () 
  {
  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
};
window.onload = function () {
  generateQuotes();
  document.getElementById("generate").addEventListener("click", generateQuotes);
};