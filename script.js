let fortunes = [
    "If you eat something and nobody sees you eat it, it has no calories",
    "The fortune you seek is in another cookie",
    "It could be better, bit it's good enough.",
    "To truly find yourself you should play hid and seek alone.",
    "Pass the bill to the person on your right.",
    "Don't panic.",
    "I see money in your future...it is not yours though.",
    "Enjoy yourself while you can.",
    "If you think we're going to sum up your whole life on this little piece of paper your're crazy.",
    "When you squeeze an orange, orange juice comes out-because that's what's inaide.",
];

document.getElementById("openCookie").addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById("fortuneMessage").innerText = fortunes[randomIndex];
});