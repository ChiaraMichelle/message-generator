let randomIdeas = ['Change your hair style', 'Go buy a plane ticket or plan your next holiday', 'Go bungee jumping', 'Create your own cocktail', 'Learn another language', 'Take yourself out on a date', 'Learn how to ride a horse', 'Go skinny dipping', 'Give blood', 'Learn how to do a magic trick', 'Learn how to sew and make your own clothing', 'Take a helicopter ride', 'Go to a yoga retreat', 'Take up pottery', 'Volunteer', 'Go at least 24 hours without internet, your cellphone, and video games', 'Try a new sport', 'Sleep under the stars', 'Learn how to use chopsticks', 'Learn how to play an instrument', 'Learn how to surf', 'Run a marathon, half marathon, or 5k', 'Explore a cave', 'Get a tattoo', 'Binge-watch a new TV series', 'Explore a new city', 'Bake something', `Karaoke`, 'Go to a concert', 'Go to a theme park', 'Treat yourself to a spa day', 'Go on a camping trip', 'Play a board game', 'Go to an exotic restaurant', 'Get all dressed up and go dancing', 'Go hiking', 'Have a picnic', 'Watch an old classic movie'];




function ideaGenerator () {
    let randomIdea = randomIdeas[Math.floor(Math.random() * randomIdeas.length)];
    document.getElementById('idea-display').textContent = randomIdea;
} 


