let cardsCont = document.getElementById('cards-cont');

let blogsData = [
    {
        title: "Future of AI",
        desc: " A simple explanation of what the future of AI looks like.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6tTkVDiZ5vSPyWxpnlzuYsgBKJhkMtqtZg&s",
        index: 1,
    },
    {
        title: "Best Gadgets",
        desc: "A list of the best tech gadgets in 2026.",
        image: "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
        index: 3,
    },
    {
        title: "Cyber Security",
        desc: "Tips to stay safe online.",
        image: "https://blog.lipsumhub.com/wp-content/uploads/2025/03/lorem-ipsum-generator-for-cybersecurity-firms-lipsumhub.jpg",
        index: 2,
    },
    
];

blogsData.forEach(data => {
    let card = document.createElement('div');
    card.classList.add("card")
    card.innerHTML = `<img src="${data.image}"/>
                        <div class="card-content">
                            <h3>${data.title}</h3>
                            <p>
                               ${data.desc}
                            </p>
                            <button class="button">Read more</button>
                        </div>`;
    cardsCont.appendChild(card);
});
