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
    "When you squeeze an orange, orange juice comes out-because that's what's inside.",
];

document.getElementById("openCookie").addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById("fortuneMessage").innerText = fortunes[randomIndex];
});

let motivation = [
    "Small steps today lead to great journeys tomorrow.",
    "Embrace the challenge; it’s the path to growth.",
    "Success is built on the foundation of consistent effort.",
    "Focus on progress, not perfection.",
    "Let your passion be the compass that guides you.",
    "Your mindset shapes your reality; choose it wisely.",
    "Dream big, act small, and celebrate every win.",
    "Stay curious; each day holds new lessons.",
    "Your actions today create the future you desire.",
    "Embrace discomfort; it’s where true growth happens.",
];

document.getElementById("getmotivated").addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * motivation.length);
    document.getElementById("motivationMessage").innerText = motivation[randomIndex];
});

let inspiration = [
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Let us remember: One book, one pen, one child, and one teacher can change the world.-Malala Yousafzai",
    "If I have seen further than others, it is by standing upon the shoulders of giants. -Isaac Newton",
    "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.' -Muhammad Ali",
    "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them. -John F. Kennedy",
    "We know what we are, but know not what we may be. -William Shakespeare",
    "You must do the things you think you cannot do. -Eleanor Roosevelt",
    "Memories of our lives, of our works and our deeds will continue in others. -Rosa Parks",
    
];

document.getElementById("getinspired").addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * inspiration.length);
    document.getElementById("inspirationMessage").innerText = inspiration[randomIndex];
});

let jokes = [
    "Why did the banana go to the hospital? He was peeling really bad.",
    "What did the mayonnaise say when the refrigerator door was opened? Close the door, I'm dressing.",
    "What happens if a frog parks illegally? They get toad.",
    "Why couldn't the bike stand up? It was too tired.",
    "What did the baby corn say to the mama corn? Where's pop corn?",
    "What runs around a yard without actually moving? A fence.",
    "Why can’t two elephants go swimming? Because they only have one pair of trunks.",
    "What has four wheels and flies? A garbage truck.",
    "What's orange and sounds like a parrot? A carrot.",
    "Why did the pig get hired by the restaurant? He was really good at bacon.",
];

document.getElementById("getjokes").addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("jokeMessage").innerText = jokes[randomIndex];
});


let compliment = [
    "You're an awesome friend.",
    "You are awesome!",
    "You should be proud of yourself.",
    "You are really courageous.",
    "You are strong.",
    "You are making a difference.",
    "You're a smart cookie.",
    "You are enough.",
    "That color is perfect on you.",
    "You're wonderful.",
];

document.getElementById("getcompliment").addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * compliment.length);
    document.getElementById("complimentMessage").innerText = compliment[randomIndex];
});