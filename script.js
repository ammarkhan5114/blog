let cardsContTech = document.getElementById('cards-cont-tech');
let cardsContGaming = document.getElementById('cards-cont-gaming');
let cardsContProd = document.getElementById('cards-cont-prod');

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
    {
        title: "AI Tools in 2026",
        desc: "Popular AI tools changing the industry.",
        image: "https://img.freepik.com/premium-photo/happy-new-year-2026-ai-seo-more-advanced-technology-concept-2026-desk-calendar-with-cute-3d-chat-robot-chatbot-efficiency-automated-analysis-data-tools-magnifying-glass-blue-background_36367-11206.jpg?w=1480",
        index: 10,
        category: "tech",
        mainBlog: "AI tools in 2026 help with coding, design, and writing tasks. They increase productivity and reduce manual effort. Tools like AI assistants are widely used in businesses. Automation is becoming the new standard."
    },
    {
        title: "Cloud Computing Basics",
        desc: "Understanding cloud technology easily.",
        image: "https://img.freepik.com/premium-vector/cloud-storage-with-laptop-isometric-data-center-with-data-exchange-hosting-cloud-service-app-network-with-computing-technologies-saas-networks-softs-programs-vector-banner_115579-1743.jpg?ga=GA1.1.172384037.1770370751&semt=ais_hybrid&w=740&q=80d",
        index: 11,
        category: "tech",
        mainBlog: "Cloud computing allows storage and computing over the internet. It reduces hardware dependency for companies. Services like SaaS and IaaS are widely used. It offers scalability and cost efficiency."
    },
    {
        title: "Latest Programming Trends",
        desc: "Trends shaping software development.",
        image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?ga=GA1.1.172384037.1770370751&semt=ais_hybrid&w=740&q=80",
        index: 12,
        category: "tech",
        mainBlog: "Modern programming focuses on AI integration and automation. JavaScript and Python remain highly popular. Low-code platforms are growing fast. Developers now focus more on problem-solving than syntax."
    },
    {
        title: "Esports Growth",
        desc: "Rise of competitive gaming worldwide.",
        image: "https://img.freepik.com/free-photo/group-multiracial-teens-headsets-playing-video-games-video-game-club-with-blue-red-illumination-keyboard-mouse-with-illumination_1268-24588.jpg?ga=GA1.1.172384037.1770370751&semt=ais_hybrid&w=740&q=80",
        index: 13,
        category: "gaming",
        mainBlog: "Esports is growing into a global industry. Professional players earn through tournaments and sponsorships. Streaming platforms boost popularity. Competitive gaming is now a career option."
    },
    {
        title: "VR Gaming Future",
        desc: "How virtual reality is changing gaming.",
        image: "https://img.freepik.com/free-vector/isometric-technology-futuristic-background_23-2149124520.jpg?ga=GA1.1.172384037.1770370751&semt=ais_hybrid&w=740&q=80",
        index: 14,
        category: "gaming",
        mainBlog: "VR gaming creates immersive experiences for players. It uses motion tracking and 3D environments. Hardware is becoming more affordable. Future games will feel more realistic and interactive."
    },
    {
        title: "Mobile Gaming Trends",
        desc: "Growth of gaming on smartphones.",
        image: "https://img.freepik.com/free-vector/mobile-games-flat-infographic-set-isolated-human-hands-playing-smartphone-relaxing-games-with-editable-text-vector-illustration_98292-9617.jpg?ga=GA1.1.172384037.1770370751&semt=ais_hybrid&w=740&q=80",
        index: 15,
        category: "gaming",
        mainBlog: "Mobile gaming is the fastest-growing segment. Games are becoming more high-quality and competitive. Cloud gaming supports mobile devices. Easy access makes it popular worldwide."
    },
    {
        title: "Study Hacks",
        desc: "Smart ways to study effectively.",
        image: "https://img.freepik.com/free-photo/book-laptop-pencil-clock-wooden-table-library-education-learning-concept_1150-16629.jpg?ga=GA1.1.172384037.1770370751&semt=ais_hybrid&w=740&q=80",
        index: 16,
        category: "productivity",
        mainBlog: "Study hacks help improve learning speed and memory. Use active recall and spaced repetition. Avoid distractions while studying. Short study sessions improve retention."
    },
    {
        title: "Work from Home Tips",
        desc: "Stay productive while working remotely.",
        image: "https://img.freepik.com/premium-vector/work-from-home-office-worker-sit-sofa-home-prevent-corona-virus_68708-837.jpg?ga=GA1.1.172384037.1770370751&semt=ais_hybrid&w=740&q=80",
        index: 17,
        category: "productivity",
        mainBlog: "Working from home requires discipline and structure. Set a dedicated workspace for focus. Follow a fixed schedule daily. Take regular breaks to avoid fatigue."
    },
    {
        title: "Goal Setting Guide",
        desc: "How to set and achieve your goals.",
        image: "https://img.freepik.com/free-photo/top-view-goals-written-note-with-notepad-pen-white-surface-job-office-school-copybook-color-college-business_179666-19781.jpg?ga=GA1.1.172384037.1770370751&semt=ais_hybrid&w=740&q=80",
        index: 18,
        category: "productivity",
        mainBlog: "Setting clear goals improves success rate. Break big goals into smaller tasks. Track your progress regularly. Stay consistent and adjust plans when needed."
    }

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
        cardsContTech.appendChild(card);
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
        cardsContGaming.appendChild(card);
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
        cardsContProd.appendChild(card);
    } 
});



function change(title, mainBlog, img) {
    window.location.href = `blog.html?title=${encodeURIComponent(title)}&mainBlog=${encodeURIComponent(mainBlog)}&image=${encodeURIComponent(img)}`;
};
