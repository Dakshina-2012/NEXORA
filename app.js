const app = {
    games: window.gameDatabase || [],
    currentCategory: 'All',

    init() {
        // App is hidden by default. Show splash screen, then login modal.
        const navContainer = document.querySelector('.navbar');
        if (navContainer) navContainer.style.display = 'none';

        const appContent = document.getElementById('app-content');
        if (appContent) appContent.style.display = 'none';

        // Splash logic
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            if (splash) splash.classList.remove('active');
            setTimeout(() => {
                document.getElementById('login-modal').classList.add('active');
            }, 800); // Wait for splash fade out
        }, 3000); // 3 seconds splash

        this.renderGames(this.games);
        this.setupSearch();
    },

    setupSearch() {
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = this.games.filter(g => g.title.toLowerCase().includes(term));

            // Overwrite current category title to show search results
            document.getElementById('current-category-title').innerText = term ? `Search Results for "${term}"` : `${this.currentCategory} Games`;
            this.renderGames(filtered);
        });
    },

    renderGames(gamesToRender) {
        const container = document.getElementById('games-container');
        container.innerHTML = '';

        if (gamesToRender.length === 0) {
            container.innerHTML = `<p style="color: var(--text-muted); grid-column: 1 / -1; text-align: center; padding: 3rem;">No games found in this category.</p>`;
            return;
        }

        gamesToRender.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.onclick = () => this.openGameDetail(game.id);

            card.innerHTML = `
                <div class="card-image-wrap">
                    <img src="${game.image}" alt="${game.title}" loading="lazy">
                    <div class="card-overlay">
                        <i class="fa-solid fa-circle-play play-icon"></i>
                    </div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${game.title}</h3>
                    <div class="tags">
                        <span class="tag">${game.category}</span>
                        <span class="tag rating"><i class="fa-solid fa-star"></i> ${game.rating}</span>
                    </div>
                    <p class="card-desc">${game.description}</p>
                </div>
            `;
            container.appendChild(card);
        });
    },

    filterCategory(category) {
        // Update Nav Links
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        event.target.classList.add('active');

        this.currentCategory = category;
        document.getElementById('current-category-title').innerText = category === 'All' ? 'Trending Games' : `${category} Games`;

        const filtered = category === 'All'
            ? this.games
            : this.games.filter(g => g.category === category);

        this.renderGames(filtered);
        this.goHome(); // Ensure we are on home view
    },

    openGameDetail(gameId) {
        const game = this.games.find(g => g.id === gameId);
        if (!game) return;

        // Load Video
        const vidEl = document.getElementById('game-video');
        vidEl.src = game.video;
        vidEl.play().catch(e => console.log('Autoplay prevented:', e));

        // Switch Views
        document.getElementById('home-view').style.display = 'none';
        document.getElementById('game-detail-view').style.display = 'block';

        // Populate detail view
        document.getElementById('detail-title').innerText = game.title;
        document.getElementById('detail-category').innerText = game.category;
        document.getElementById('detail-rating').innerText = game.rating;
        document.getElementById('detail-reviews-count').innerText = game.reviewsCount;
        document.getElementById('detail-description').innerText = game.description;
        document.getElementById('detail-instructions').innerText = game.instructions;
        document.getElementById('detail-requirements').innerText = game.requirements;
        
        // Populate Reviews
        const reviewsContainer = document.getElementById('detail-reviews-list');
        if (reviewsContainer && game.reviews) {
            reviewsContainer.innerHTML = game.reviews.map(r => `
                <div class="review-item">
                    <div class="reviewer">
                        <span>${r.user}</span>
                        <span class="review-stars">${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}</span>
                    </div>
                    <div class="review-text">"${r.comment}"</div>
                </div>
            `).join('');
        }

        // Populate Similar Games
        const similarContainer = document.getElementById('detail-similar-games');
        if (similarContainer) {
            const similarGames = this.games.filter(g => g.category === game.category && g.id !== game.id).slice(0, 3);
            similarContainer.innerHTML = similarGames.map(sg => `
                <div class="rec-item" onclick="app.openGameDetail(${sg.id})">
                    <img src="${sg.thumbnail}" class="rec-img" alt="${sg.title}">
                    <div class="rec-info">
                        <h5>${sg.title}</h5>
                        <div class="review-stars"><i class="fa-solid fa-star"></i> ${sg.rating}</div>
                    </div>
                </div>
            `).join('');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    goHome() {
        document.getElementById('game-detail-view').style.display = 'none';
        document.getElementById('home-view').style.display = 'block';
        const vidEl = document.getElementById('game-video');
        if (vidEl) {
            vidEl.pause();
            vidEl.src = ""; // Stop buffering
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    playRandom() {
        const randomIndex = Math.floor(Math.random() * this.games.length);
        this.openGameDetail(this.games[randomIndex].id);
    },

    login() {
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password').value;
        const validEmails = ['dakshina@gmail.com', 'adhi@gmail.com', 'deepan@gmail.com'];
        const validPass = '123456&*';
        const errorEl = document.getElementById('login-error');

        if (validEmails.includes(email) && pass === validPass) {
            errorEl.style.display = 'none';
            document.getElementById('login-modal').classList.remove('active');

            // Show main app areas
            document.querySelector('.navbar').style.display = 'block';

            // Setting flex to maintain the nav-container layout properly
            const navCtr = document.querySelector('.nav-container');
            if (navCtr) navCtr.style.display = 'flex';

            document.getElementById('app-content').style.display = 'block';
            this.goHome();
        } else {
            errorEl.innerText = "Invalid credentials. Please verify your email and password.";
            errorEl.style.display = 'block';
        }
    },

    logout() {
        // Hide Main content, clear inputs, reset views
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        document.getElementById('login-error').style.display = 'none';

        document.querySelector('.navbar').style.display = 'none';
        document.getElementById('app-content').style.display = 'none';
        document.getElementById('login-modal').classList.add('active');
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
