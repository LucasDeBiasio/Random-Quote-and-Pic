let button = document.getElementById('button');
let QuoteDisplay = document.getElementById('QuoteDisplay');
let StorieQuotes = ['Woof!', 'So Wude', 'I want a tweat', 'I want cewwey', '*excited noices*', '*cries*', 'Arf!', 'I miss Yucas'];

button.addEventListener('click', randQuote)

function randQuote() {
    var randQuote = StorieQuotes[Math.floor(Math.random() * StorieQuotes.length)]
    QuoteDisplay.innerHTML = randQuote;
}

let pics = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5-1.jpg',
    '6.jpg',
    '7.jpg',
];

button.addEventListener('click', randPic)

function randPic() {
    // get random index
    random_index = Math.floor(Math.random()*pics.length);

    // get an image at the random index
    selected_image = pics[random_index]
    console.log(selected_image);

    // display the image
    document.getElementById('imageDisplay').src = `./images/${selected_image}`
}

