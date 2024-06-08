document.addEventListener('DOMContentLoaded', function() {
    // Gestionarea caruselelor
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const prevButton = carousel.parentElement.querySelector('.prev');
        const nextButton = carousel.parentElement.querySelector('.next');
        
        prevButton.addEventListener('click', () => {
            carousel.scrollBy({
                top: 0,
                left: -200,
                behavior: 'smooth'
            });
        });

        nextButton.addEventListener('click', () => {
            carousel.scrollBy({
                top: 0,
                left: 200,
                behavior: 'smooth'
            });
        });

        // Eveniment de clic pentru fiecare imagine
        carousel.addEventListener('click', function(event) {
            if (event.target.tagName === 'IMG') {
                openMovieModal(event.target.alt);
            }
        });
    });

    // Vector de filme
    const movies = [
        { title: 'The Shawshank Redemption', genre: 'Drama', image_url: 'img/The Shawshank Redemption.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'The Godfather', genre: 'Crime', image_url: 'img/The Godfather.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'The Dark Knight', genre: 'Action', image_url: 'img/The Dark Knight.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Bob Marley One Love', genre: 'Biography', image_url: 'img/Bob Marley One Love.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Pulp Fiction', genre: 'Crime', image_url: 'img/Pulp Fiction.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Aquaman and the Lost City', genre: 'Fantasy', image_url: 'img/Aquaman and the Lost City.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Forrest Gump', genre: 'Drama', image_url: 'img/Forrest Gump.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Inception', genre: 'Sci-Fi', image_url: 'img/Inception.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Fight Club', genre: 'Drama', image_url: 'img/Fight Club.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'The Matrix', genre: 'Sci-Fi', image_url: 'img/The Matrix.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Goodfellas', genre: 'Crime', image_url: 'img/Goodfellas.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'The Empire Strikes Back', genre: 'Sci-Fi', image_url: 'img/The Empire Strikes Back.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Interstellar', genre: 'Sci-Fi', image_url: 'img/Interstellar.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'City of God', genre: 'Crime', image_url: 'img/City of God.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Se7en', genre: 'Crime', image_url: 'img/Se7en.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'The Silence of the Lambs', genre: 'Thriller', image_url: 'img/The Silence of the Lambs.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Life Is Beautiful', genre: 'Comedy', image_url: 'img/Life Is Beautiful.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Spirited Away', genre: 'Animation', image_url: 'img/Spirited Away.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Saving Private Ryan', genre: 'War', image_url: 'img/Saving Private Ryan.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'The Green Mile', genre: 'Drama', image_url: 'img/The Green Mile.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Parasite', genre: 'Thriller', image_url: 'img/Parasite.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'The Lion King', genre: 'Animation', image_url: 'img/The Lion King.png', likes: 0, dislikes: 0, comments: [] },
        { title: 'Gladiator', genre: 'Action', image_url: 'img/Gladiator.png', likes: 0, dislikes: 0, comments: [] }
    ];

    // Vector de trailere
    const trailers = [
        { title: 'The Shawshank Redemption', url: 'https://www.youtube.com/embed/6hB3S9bIaco' },
        { title: 'The Godfather', url: 'https://www.youtube.com/embed/sY1S34973zA' },
        { title: 'The Dark Knight', url: 'https://www.youtube.com/embed/EXeTwQWrcwY' },
        { title: 'Bob Marley One Love', url: 'https://www.youtube.com/watch?v=ajw425Kuvtw' },
        { title: 'Pulp Fiction', url: 'https://www.youtube.com/embed/s7EdQ4FqbhY' },
        { title: 'Aquaman and the Lost City', url: 'https://www.youtube.com/watch?v=FV3bqvOHRQo' },
        { title: 'Forrest Gump', url: 'https://www.youtube.com/embed/bLvqoHBptjg' },
        { title: 'Inception', url: 'https://www.youtube.com/embed/YoHD9XEInc0' },
        { title: 'Fight Club', url: 'https://www.youtube.com/embed/SUXWAEX2jlg' },
        { title: 'The Matrix', url: 'https://www.youtube.com/embed/vKQi3bBA1y8' },
        { title: 'Goodfellas', url: 'https://www.youtube.com/embed/2ilzidi_J8Q' },
        { title: 'The Empire Strikes Back', url: 'https://www.youtube.com/embed/JNwNXF9Y6kY' },
        { title: 'Interstellar', url: 'https://www.youtube.com/embed/zSWdZVtXT7E' },
        { title: 'City of God', url: 'https://www.youtube.com/embed/dcUOO4Itgmw' },
        { title: 'Se7en', url: 'https://www.youtube.com/embed/znmZoVkCjpI' },
        { title: 'The Silence of the Lambs', url: 'https://www.youtube.com/embed/W6Mm8Sbe__o' },
        { title: 'Life Is Beautiful', url: 'https://www.youtube.com/embed/pAYEQP8gx3w' },
        { title: 'Spirited Away', url: 'https://www.youtube.com/embed/ByXuk9QqQkk' },
        { title: 'Saving Private Ryan', url: 'https://www.youtube.com/embed/zwhP5b4tD6g' },
        { title: 'The Green Mile', url: 'https://www.youtube.com/embed/Ki4haFrqSrw' },
        { title: 'Parasite', url: 'https://www.youtube.com/embed/5xH0HfJHsaY' },
        { title: 'The Lion King', url: 'https://www.youtube.com/embed/7TavVZMewpY' },
        { title: 'Gladiator', url: 'https://www.youtube.com/embed/owK1qxDselE' }
    ];

    // Funcție pentru a selecta un trailer aleatoriu
    function selectRandomTrailer() {
        const randomIndex = Math.floor(Math.random() * trailers.length);
        return trailers[randomIndex].url;
    }

    // Funcție pentru a popula secțiunea de trailer
    function populateTrailerSection() {
        const trailerVideo = document.getElementById('trailer-video');
        trailerVideo.src = selectRandomTrailer();
    }

    // Funcție pentru a popula caruselul de pe pagina home
    function populateHomeCarousel() {
        const homeCarousel = document.querySelector('#home-carousel .carousel');

        movies.forEach(movie => {
            const img = document.createElement('img');
            img.src = movie.image_url;
            img.alt = movie.title;
            homeCarousel.appendChild(img);
        });
    }

    // Funcție pentru a popula caruselele din pagina movies
    function populateMovieCarousels() {
        const genres = Array.from(new Set(movies.map(movie => movie.genre)));
        
        genres.forEach(genre => {
            const carousel = document.querySelector(`.carousel[data-genre="${genre}"]`);

            if (carousel) {
                const genreMovies = movies.filter(movie => movie.genre === genre);
                
                genreMovies.forEach(movie => {
                    const img = document.createElement('img');
                    img.src = movie.image_url;
                    img.alt = movie.title;
                    carousel.appendChild(img);
                });
            }
        });
    }

    // Funcție pentru a muta caruselul
    function moveCarousel(direction, genre) {
        const carousel = document.querySelector(`.carousel[data-genre="${genre}"]`);
        const totalItems = carousel.children.length;
        const itemsVisible = 4;
        let currentIndex = carousel.getAttribute('data-current-index') || 0;
        currentIndex = parseInt(currentIndex);

        const carouselWidth = 25; // Lățimea fiecărei imagini în procente

        if (direction === 'next') {
            if (currentIndex < totalItems - itemsVisible) {
                currentIndex++;
            }
        } else if (direction === 'prev') {
            if (currentIndex > 0) {
                currentIndex--;
            }
        }

        const offset = -(carouselWidth * currentIndex);
        carousel.style.transform = `translateX(${offset}%)`;
        carousel.setAttribute('data-current-index', currentIndex);
    }

    // Populează secțiunea de trailer și caruselul când pagina este încărcată
    if (document.getElementById('trailer-video')) {
        populateTrailerSection();
    }

    if (document.querySelector('#home-carousel .carousel')) {
        populateHomeCarousel();
    }

    if (document.querySelector('.carousel[data-genre]')) {
        populateMovieCarousels();
    }

    // Gestionarea modalului de detalii film
    const movieModal = document.getElementById('movie-modal');
    const closeBtn = movieModal.querySelector('.close-btn');
    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');
    const movieRating = document.getElementById('movie-rating');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
    let currentMovie = null;

    function openMovieModal(title) {
        const movie = movies.find(m => m.title === title);
        if (movie) {
            currentMovie = movie;
            document.getElementById('movie-title').textContent = movie.title;
            updateMovieRating();
            updateCommentsList();
            movieModal.style.display = 'block';
        }
    }

    function closeMovieModal() {
        movieModal.style.display = 'none';
        currentMovie = null;
    }

    function updateMovieRating() {
        const totalVotes = currentMovie.likes + currentMovie.dislikes;
        const rating = totalVotes === 0 ? 10 : (10 * (currentMovie.likes / totalVotes)).toFixed(1);
        movieRating.textContent = `${rating}/10`;
    }

    function updateCommentsList() {
        commentsList.innerHTML = '';
        currentMovie.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.textContent = comment;
            commentsList.appendChild(commentElement);
        });
    }

    likeBtn.addEventListener('click', () => {
        currentMovie.likes++;
        updateMovieRating();
    });

    dislikeBtn.addEventListener('click', () => {
        currentMovie.dislikes++;
        updateMovieRating();
    });

    commentInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const comment = commentInput.value.trim();
            if (comment) {
                currentMovie.comments.push(comment);
                updateCommentsList();
                commentInput.value = '';
            }
        }
    });

    closeBtn.addEventListener('click', closeMovieModal);
    window.addEventListener('click', function(event) {
        if (event.target === movieModal) {
            closeMovieModal();
        }
    });

    // Chat

    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const chatWith = document.getElementById('chat-with');

    // Utilizatori fictivi
    const users = {
        Alex: { 
            color: '#ff6347', 
            messages: [
                'Hello! How is everyone?',
                'What movies have you watched recently?',
                'Has anyone read any good books lately?',
                'What is your favorite cuisine?',
                'Do you prefer coffee or tea?',
                'What are your hobbies?',
                'Have you traveled anywhere interesting recently?',
                'What is your favorite sport?',
                'Do you like playing video games?',
                'What is your favorite season?',
                'Do you enjoy cooking?',
                'What is your favorite type of music?',
                'Do you play any musical instruments?',
                'What is your favorite holiday?',
                'Do you have any pets?',
                'What is your favorite TV show?',
                'Do you enjoy outdoor activities?',
                'What is your favorite dessert?',
                'Do you like going to the beach?',
                'What is your dream job?',
                'What is your favorite book genre?',
                'Do you enjoy watching documentaries?',
                'What is your favorite kind of weather?',
                'Do you like art?',
                'What is your favorite board game?',
                'Do you enjoy gardening?',
                'What is your favorite drink?',
                'Do you like going to the movies?',
                'What is your favorite superhero?',
                'Do you enjoy dancing?',
                'What is your favorite type of animal?',
                'Do you like puzzles?',
                'What is your favorite color?',
                'Do you enjoy singing?',
                'What is your favorite snack?',
                'Do you like swimming?',
                'What is your favorite flower?',
                'Do you enjoy reading poetry?',
                'What is your favorite car brand?',
                'Do you like hiking?',
                'What is your favorite ice cream flavor?',
                'Do you enjoy playing sports?',
                'What is your favorite number?',
                'Do you like magic tricks?',
                'What is your favorite scent?',
                'Do you enjoy photography?',
                'What is your favorite quote?',
                'Do you like roller coasters?',
                'What is your favorite thing to do on weekends?',
                'Do you enjoy camping?'
            ] 
        },
        Martha: { 
            color: '#ff69b4', 
            messages: [
                'I just watched The Shawshank Redemption!',
                'Has anyone seen the new Inception movie?',
                'What is your favorite restaurant?',
                'Do you prefer morning or night?',
                'Have you ever been to a concert?',
                'What is your favorite holiday destination?',
                'Do you like spicy food?',
                'What is your favorite workout routine?',
                'Do you enjoy painting?',
                'What is your favorite childhood memory?',
                'Do you like cats or dogs more?',
                'What is your favorite fashion brand?',
                'Do you enjoy listening to podcasts?',
                'What is your favorite ice cream topping?',
                'Do you like playing chess?',
                'What is your favorite app on your phone?',
                'Do you enjoy writing?',
                'What is your favorite carnival ride?',
                'Do you like trying new recipes?',
                'What is your favorite mode of transportation?',
                'Do you enjoy fishing?',
                'What is your favorite movie genre?',
                'Do you like going to the theater?',
                'What is your favorite way to relax?',
                'Do you enjoy volunteering?',
                'What is your favorite thing to do in your free time?',
                'Do you like knitting or crocheting?',
                'What is your favorite subject in school?',
                'Do you enjoy visiting museums?',
                'What is your favorite card game?',
                'Do you like watching sports?',
                'What is your favorite fruit?',
                'Do you enjoy playing board games?',
                'What is your favorite smoothie flavor?',
                'Do you like spending time in nature?',
                'What is your favorite comedy show?',
                'Do you enjoy shopping?',
                'What is your favorite candy?',
                'Do you like doing yoga?',
                'What is your favorite video game?',
                'Do you enjoy photography?',
                'What is your favorite historical period?',
                'Do you like going to amusement parks?',
                'What is your favorite vegetable?',
                'Do you enjoy attending festivals?',
                'What is your favorite pizza topping?',
                'Do you like learning new languages?',
                'What is your favorite way to spend a rainy day?',
                'Do you enjoy DIY projects?',
                'What is your favorite type of cookie?'
            ] 
        },
        George: { 
            color: '#87ceeb', 
            messages: [
                'I love sci-fi movies!',
                'Can anyone recommend a good thriller?',
                'What is your favorite hobby?',
                'Do you prefer watching movies at home or in the theater?',
                'Have you read any interesting books lately?',
                'What is your favorite video game?',
                'Do you like listening to music while working?',
                'What is your favorite outdoor activity?',
                'Do you enjoy cooking or baking?',
                'What is your favorite city to visit?',
                'Do you like puzzles or riddles?',
                'What is your favorite way to exercise?',
                'Do you enjoy playing musical instruments?',
                'What is your favorite genre of music?',
                'Do you like going to the beach?',
                'What is your favorite way to unwind after a long day?',
                'Do you enjoy watching documentaries?',
                'What is your favorite board game?',
                'Do you like gardening?',
                'What is your favorite season of the year?',
                'Do you enjoy crafting or DIY projects?',
                'What is your favorite type of cuisine?',
                'Do you like to travel?',
                'What is your favorite thing about weekends?',
                'Do you enjoy attending live events?',
                'What is your favorite snack?',
                'Do you like reading fiction or non-fiction?',
                'What is your favorite animal?',
                'Do you enjoy playing sports?',
                'What is your favorite ice cream flavor?',
                'Do you like hiking or camping?',
                'What is your favorite holiday?',
                'Do you enjoy painting or drawing?',
                'What is your favorite way to spend time with friends?',
                'Do you like going to the gym?',
                'What is your favorite TV series?',
                'Do you enjoy learning new skills?',
                'What is your favorite drink?',
                'Do you like visiting museums or galleries?',
                'What is your favorite thing to cook?',
                'Do you enjoy writing?',
                'What is your favorite dessert?',
                'Do you like playing card games?',
                'What is your favorite childhood memory?',
                'Do you enjoy fishing or boating?',
                'What is your favorite flower?',
                'Do you like attending parties or gatherings?',
                'What is your favorite way to relax?',
                'Do you enjoy solving math problems?',
                'What is your favorite superhero?',
                'Do you like visiting amusement parks?'
            ] 
        },
        Deli: { 
            color: '#32cd32', 
            messages: [
                'Hi there!',
                'What\'s your favorite movie?',
                'Do you enjoy cooking?',
                'What is your favorite book?',
                'Do you like playing sports?',
                'What is your favorite animal?',
                'Do you enjoy traveling?',
                'What is your favorite holiday?',
                'Do you like listening to music?',
                'What is your favorite food?',
                'Do you enjoy hiking?',
                'What is your favorite drink?',
                'Do you like gardening?',
                'What is your favorite TV show?',
                'Do you enjoy painting or drawing?',
                'What is your favorite video game?',
                'Do you like going to the beach?',
                'What is your favorite dessert?',
                'Do you enjoy reading?',
                'What is your favorite season?',
                'Do you like playing board games?',
                'What is your favorite restaurant?',
                'Do you enjoy watching sports?',
                'What is your favorite type of music?',
                'Do you like camping?',
                'What is your favorite flower?',
                'Do you enjoy attending concerts?',
                'What is your favorite app on your phone?',
                'Do you like puzzles?',
                'What is your favorite ice cream flavor?',
                'Do you enjoy dancing?',
                'What is your favorite superhero?',
                'Do you like trying new recipes?',
                'What is your favorite subject in school?',
                'Do you enjoy photography?',
                'What is your favorite hobby?',
                'Do you like shopping?',
                'What is your favorite candy?',
                'Do you enjoy going to the movies?',
                'What is your favorite car brand?',
                'Do you like spending time outdoors?',
                'What is your favorite color?',
                'Do you enjoy knitting or crocheting?',
                'What is your favorite type of weather?',
                'Do you like playing musical instruments?',
                'What is your favorite childhood memory?',
                'Do you enjoy volunteering?',
                'What is your favorite smoothie flavor?',
                'Do you like visiting museums?',
                'What is your favorite board game?',
                'Do you enjoy fishing?'
            ] 
        },
    };

    let currentUser = 'Global Chat';

    // Funcție pentru a adăuga un mesaj în chat
    function addMessage(user, message, isMe = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isMe ? 'me' : 'other');
        messageElement.innerHTML = `<strong style="color:${users[user]?.color || '#ffffff'}">${user}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll automat în jos
    }

    // Funcție pentru a trimite mesajele utilizatorilor fictivi
    function sendRandomMessage() {
        const userKeys = Object.keys(users);
        const randomUser = userKeys[Math.floor(Math.random() * userKeys.length)];
        const randomMessage = users[randomUser].messages[Math.floor(Math.random() * users[randomUser].messages.length)];
        addMessage(randomUser, randomMessage);
    }

    // Trimitere mesaj utilizator fictiv la fiecare 5-10 secunde
    setInterval(sendRandomMessage, Math.random() * (10000 - 5000) + 5000);

    // Trimitere mesaj utilizator real la apăsarea Enter
    chatInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const message = chatInput.value;
            if (message.trim() !== '') {
                addMessage('Me', message, true);
                chatInput.value = '';

                // Răspuns automat de la utilizatorul fictiv menționat
                const mentionedUser = Object.keys(users).find(user => message.includes(user));
                if (mentionedUser) {
                    const reply = users[mentionedUser].messages[Math.floor(Math.random() * users[mentionedUser].messages.length)];
                    setTimeout(() => addMessage(mentionedUser, reply), 1000);
                }
            }
        }
    });

    // Modal

    const createGroupBtn = document.getElementById('create-group-btn');
    const modal = document.getElementById('create-group-modal');
    const closeGroupBtn = modal.querySelector('.close-btn');
    const userSearchInput = document.getElementById('user-search');
    const addUserBtn = document.getElementById('add-user-btn');
    const userList = document.getElementById('user-list');

    createGroupBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    closeGroupBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    addUserBtn.addEventListener('click', function() {
        const username = userSearchInput.value.trim();
        if (username && users[username]) {
            const userElement = document.createElement('div');
            userElement.textContent = username;
            userList.appendChild(userElement);
            userSearchInput.value = '';
        } else {
            alert('User not found or already added');
        }
    });

    // Funcție pentru a crea un grup nou
    const createGroupForm = document.getElementById('create-group-form');
    const groupsContainer = document.getElementById('groups-container');

    createGroupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const groupName = document.getElementById('group-name').value;
        const groupDescription = document.getElementById('group-description').value;
        const groupUsers = Array.from(userList.children).map(child => child.textContent);

        const groupSection = document.createElement('section');
        groupSection.classList.add('group-section');
        groupSection.innerHTML = `
            <h3>${groupName}</h3>
            <p>${groupDescription}</p>
            <div class="group-chat-box"></div>
            <input type="text" class="group-chat-input" placeholder="Type a message...">
            <button class="delete-group-btn">Delete Group</button>
        `;

        groupsContainer.appendChild(groupSection);

        modal.style.display = 'none';
        createGroupForm.reset();
        userList.innerHTML = '';

        const groupChatInput = groupSection.querySelector('.group-chat-input');
        const groupChatBox = groupSection.querySelector('.group-chat-box');
        const deleteGroupBtn = groupSection.querySelector('.delete-group-btn');

        groupChatInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const message = groupChatInput.value;
                if (message.trim() !== '') {
                    const messageElement = document.createElement('div');
                    messageElement.classList.add('message', 'me');
                    messageElement.innerHTML = `<strong style="color: #007bff">Me:</strong> ${message}`;
                    groupChatBox.appendChild(messageElement);
                    groupChatInput.value = '';
                    groupChatBox.scrollTop = groupChatBox.scrollHeight; // Scroll automat în jos
                }
            }
        });

        deleteGroupBtn.addEventListener('click', function() {
            groupsContainer.removeChild(groupSection);
        });
    });

    // Gestionarea recomandărilor

    const recommendBtn = document.getElementById('recommend-btn');
    const recommendModal = document.getElementById('recommend-modal');
    const closeRecommendBtn = recommendModal.querySelector('.close-recommend-btn');
    const recommendationsBox = document.getElementById('recommendations-box');
    const recommendForm = document.getElementById('recommend-form');

    recommendBtn.addEventListener('click', function() {
        recommendModal.style.display = 'flex';
    });

    closeRecommendBtn.addEventListener('click', function() {
        recommendModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == recommendModal) {
            recommendModal.style.display = 'none';
        }
    });

    recommendForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const movieTitle = document.getElementById('movie-title-recommend').value;
        const trailerLink = document.getElementById('trailer-link').value;
        const shortMessage = document.getElementById('short-message').value;
        const viewedAt = document.getElementById('viewed-at').value;
        const rating = document.getElementById('rating').value;

        const recommendation = document.createElement('div');
        recommendation.classList.add('recommendation');
        recommendation.innerHTML = `
            <p><strong>Title:</strong> ${movieTitle}</p>
            <p><strong>Trailer:</strong> <a href="${trailerLink}" target="_blank">${trailerLink}</a></p>
            <p><strong>Message:</strong> ${shortMessage}</p>
            <p><strong>Viewed At:</strong> ${viewedAt}</p>
            <p><strong>Rating:</strong> ${rating}/10</p>
        `;

        recommendationsBox.appendChild(recommendation);

        recommendModal.style.display = 'none';
        recommendForm.reset();
    });
});
