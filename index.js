
let homeCardsContTech = document.getElementById('homecards-cont-tech');
let homeCardsContGaming = document.getElementById('homecards-cont-gaming');
let homeCardsContProd = document.getElementById('homecards-cont-prod');

let blogsData = [
    {
        title: "Future of AI",
        desc: " A simple explanation of what the future of AI looks like.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6tTkVDiZ5vSPyWxpnlzuYsgBKJhkMtqtZg&s",
        index: 1,
        category: "tech",
        mainBlog: "The future of AI is defined by deep integration into daily life, transitioning from specialized tools to autonomous agents, with generative AI and synthetic data reducing reliance on raw data by 2026."
    },
    {
        title: "Best Gadgets",
        desc: "A list of the best tech gadgets in 2026.",
        image: "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
        index: 2,
        category: "tech",
        mainBlog: "Top gadgets blogs in 2026 include established leaders like The Verge, Engadget, and Gizmodo for comprehensive tech news, alongside specialized, in-depth reviewers such as The Gadget Flow for product discovery and Digital Trends for lifestyle-focused electronics, ensuring a mix of breaking news, hands-on reviews, and curated gadget recommendations."
    },
    {
        title: "Cyber Security",
        desc: "Tips to stay safe online.",
        image: "https://blog.lipsumhub.com/wp-content/uploads/2025/03/lorem-ipsum-generator-for-cybersecurity-firms-lipsumhub.jpg",
        index: 3,
        category: "tech",
        mainBlog: "Cybersecurity is the practice of protecting systems, networks, programs, and data from digital attacks, unauthorized access, or damage. It involves a combination of technologies (firewalls, encryption), processes (risk management), and human awareness to ensure data integrity and confidentiality against threats like phishing, ransomware, and AI-powered attacks."
    },
    {
        title: "Minecraft Mods",
        desc: "Top mods that enhance your gameplay.",
        image: "https://www.popsci.com/wp-content/uploads/2023/05/20/How-to-Install-Minecraft-Mods.jpg?quality=85",
        index: 4,
        category: "gaming",
        mainBlog: "Top Minecraft mod blogs and resources include CurseForge Blog for popular pack rankings, Tynker Blog for top 2024 mod lists, and WinterNode for server optimization mods. Essential mods highlighted in 2026 include OptiFine for performance, JourneyMap for navigation, and tech/magic mods like Botania. "
    },
    {
        title: "FPS Boost",
        desc: "How to increase FPS on low-end PCs.",
        image: "https://i.ytimg.com/vi/XooBa59R2IU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDEwv_z6AFcuEyyPPh0tdh-IuvSPA",
        index: 5,
        category: "gaming",
        mainBlog: "FPS boost blogs provide actionable tips to improve gaming performance on PC, including software optimizations, in-game setting tweaks, and hardware upgrades. Key themes focus on optimizing Windows for performance, updating drivers, and utilizing upscaling technologies like NVIDIA DLSS or AMD FSR."
    },
    {
        title: "Top Games",
        desc: "Trending games of 2026.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGosdt5DDXPxzUTLJ0FScETz17SMatEdwYg&s",
        index: 6,
        category: "gaming",
        mainBlog: "Early 2026 gaming is dominated by major action-RPGs like Crimson Desert, the terrifying Resident Evil Requiem, and charming new platformers like Big Hops."
    },
    {
        title: "Focus Tips",
        desc: "How to control distractions and stay focused.",
        image: "https://www.meritstore.in/wp-content/uploads/2017/12/The-importance-of-focus-for-Academiuc-Success.png",
        index: 7,
        category: "productivity",
        mainBlog: "Improve focus instantly by eliminating distractions (phone in another room), using the Pomodoro technique (25-minute work intervals), and focusing on one task at a time. Boost long-term concentration with 7-8 hours of sleep, regular aerobic exercise, and practicing mindfulness to train the brain to sustain attention."
    },
    {
        title: "Time Management",
        desc: "Smart hacks to use your day effectively.",
        image: "https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771_640.jpg",
        index: 8,
        category: "productivity",
        mainBlog: "Effective time management involves prioritizing tasks, setting clear goals, and eliminating distractions. Key strategies include using time-blocking, tackling high-priority tasks first, delegating, and taking regular breaks to stay productive. Essential techniques include planning your day ahead, keeping a to-do list, and using tools like calendars or productivity apps to manage commitments efficiently. "
    },
    {
        title: "Daily Routine",
        desc: "A breakdown of a successful daily routine.",
        image: "https://www.shutterstock.com/image-photo/daily-routine-concept-alarm-clock-600nw-2663236435.jpg",
        index: 9,
        category: "productivity",
        mainBlog: "A balanced daily routine improves mental health and boosts productivity by establishing consistent habits. Key tips include maintaining a fixed sleep schedule, hydrating immediately upon waking, scheduling movement breaks, and prioritizing the top three tasks daily. A structured routine helps manage stress and enhances energy levels. "
    },

];

blogsData.forEach(data => {
    if (data.category === "tech") {
        let card = document.createElement('div');
        card.classList.add("card")
        card.innerHTML = `<img src="${data.image}"/>
                        <div class="card-content">
                            <h3>${data.title}</h3>
                            <p>
                               ${data.desc}
                            </p>
                            <button class="button" onclick="change('${data.title}', '${data.mainBlog}', '${data.image}')">Read more</button>
                        </div>`;
        homeCardsContTech.appendChild(card);
    } else if (data.category === "gaming") {
        let card = document.createElement('div');
        card.classList.add("card")
        card.innerHTML = `<img src="${data.image}"/>
                        <div class="card-content">
                            <h3>${data.title}</h3>
                            <p>
                               ${data.desc}
                            </p>
                            <button class="button" onclick="change('${data.title}', '${data.mainBlog}', '${data.image}')">Read more</button>
                        </div>`;
        homeCardsContGaming.appendChild(card);
    } else if (data.category === "productivity") {
        let card = document.createElement('div');
        card.classList.add("card")
        card.innerHTML = `<img src="${data.image}"/>
                        <div class="card-content">
                            <h3>${data.title}</h3>
                            <p>
                               ${data.desc}
                            </p>
                            <button class="button" onclick="change('${data.title}', '${data.mainBlog}', '${data.image}')">Read more</button>
                        </div>`;
        homeCardsContProd.appendChild(card);
    }


});



function change(title, mainBlog, img) {
    window.location.href = `blog.html?title=${encodeURIComponent(title)}&mainBlog=${encodeURIComponent(mainBlog)}&image=${encodeURIComponent(img)}`;
};

