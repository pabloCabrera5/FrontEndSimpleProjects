
const quotes = [
    {
        "text": "If you can dream it, you can achieve it.",
        "author": "- Zig Ziglar"
    },
    {
        "text": "The most common way people give up their power is by thinking they don’t have any.",
        "author": "- Alice Walker"
    },
    {
        "text": "We become what we think about.",
        "author": "- Earl Nightingale"
    },
    {
        "text": "Strive not to be a success, but rather to be of value.",
        "author": "- Albert Einstein"
    },
    {
        "text": "The only person you are destined to become is the person you decide to be.",
        "author": "- Ralph Waldo Emerson"
    },
    {
        "text": "Life isn’t about getting and having, it’s about giving and being.",
        "author": "- Kevin Kruse"
    },
    {
        "text": "Change your thoughts and you change your world.",
        "author": "- Norman Vincent Peale"
    },
    {
        "text": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        "author": "- Mark Twai"
    },
    {
        "text": "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
        "author": "- Johann Wolfgang von Goethe"
    }
]
const numQuotes = 9;
const twitterUrl = 'https://twitter.com/intent/tweet?text=';

function newQuote() {
    console.log(quotes)
    let newQuote = quotes[generateRandomNum(numQuotes)]
    console.log(newQuote)
    let { text, author } = newQuote;
    $("#author > p").text(author);
    $("#text > p").text(text);
    let color = `rgba(
        ${generateRandomNum(255)}, 
        ${generateRandomNum(255)}, 
        ${generateRandomNum(255)}, 
        ${Math.random().toFixed(2)})`
    console.log(color)
    $('body').css({ 'background-color': color, 'color': color });
    let url = twitterUrl.concat(`${text} ${author}`);
    $('#tweet-quote').attr('href', url)
}

function generateRandomNum(max = 1) {
    return Math.floor(Math.random() * max);
}