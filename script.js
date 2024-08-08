const topics = {
    java: {
        "1. Java Maps": "topics/java/java_maps.html",
        "2. == vs .equals in Java": "topics/java/equals_vs_double_equals.html",
        "3. Guide to Creating and Executing C Executables with Shared Libraries and Java Integration": "topics/java/guide_to_creating_c_executables.html",
        "4. OOP vs Nested Maps in Java": "topics/java/OOP vs Nested Maps in Java.html",
        "5. How to Add External Libraries (JAR files) in Eclipse": "topics/java/add_external_jars_eclipse.html"
    },
    python: {
        "1. How to Install Python with Anaconda and Advantages of Python": "topics/python/python_installation_and_anaconda.html"
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic");

    if (topic && topics[topic]) {
        const topicTitle = document.getElementById("topic-title");
        const topicList = document.getElementById("topic-list");

        topicTitle.innerText = `${topic.charAt(0).toUpperCase() + topic.slice(1)} Topics`;
        
        for (const [subtopic, link] of Object.entries(topics[topic])) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link;
            a.innerText = subtopic;
            li.appendChild(a);
            topicList.appendChild(li);
        }
    } else {
        console.error("Invalid topic or no topics available");
    }

    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_ell6pf6', 'template_87p2hx3', this)
            .then(function() {
                alert('Your review/suggestion has been sent!');
            }, function(error) {
                alert('Failed to send your review/suggestion. Please try again later.');
            });
    });

    document.getElementById('suggest-topic-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_ell6pf6', 'template_87p2hx3', this)
            .then(function() {
                alert('Your topic suggestion has been sent!');
            }, function(error) {
                alert('Failed to send your topic suggestion. Please try again later.');
            });
    });
});

function searchTopics() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const allTopics = Object.entries(topics).flatMap(([topic, subtopics]) =>
        Object.entries(subtopics).map(([subtopic, link]) => ({ topic, subtopic, link }))
    );
    const searchResults = allTopics.filter(({ subtopic }) => subtopic.toLowerCase().includes(searchInput));

    const topicList = document.getElementById("topic-list");
    topicList.innerHTML = "";

    searchResults.forEach(({ topic, subtopic, link }) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link;
        a.innerText = `${subtopic} (${topic})`;
        li.appendChild(a);
        topicList.appendChild(li);
    });
}
