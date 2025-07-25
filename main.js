// Movie Database - Latest Movies July 2025
// 50 trending movies/series (sampled from TMDB, Netflix, Prime, etc.)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const movies = [
    {
        id: 1,
        title: "Superman: Legacy (2025)",
        poster: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_.jpg",
        details: "Action, Adventure | 480p [400MB] | 720p [1.2GB] | 1080p [2.8GB]",
        date: "26 Jul 2025",
        category: "hollywood",
        link: "/public/download-superman-2025-hindi-480p-720p-1080p.html"
    },
    {
        id: 2,
        title: "Squid Games (2025)",
        poster: "https://m.media-amazon.com/images/M/MV5BMDA0NDBkMzMtOWQ0Zi00NjE1LTkxNWYtYzI0MTE0NGJjZTQ1XkEyXkFqcGc@._V1_.jpg",
        details: "Action, Thriller | 480p [350MB] | 720p [1GB] | 1080p [2.5GB]",
        date: "19 Jul 2025",
        category: "hollywood",
        link: "/public/download-squid-game-s01-s01-s03-hindi-480p-720p-1080p.html"
    },
    {
        id: 3,
        title: "Solo Leveling (2025)",
        poster: "https://imgs.search.brave.com/pbopPV5pCI6cDTEtmNbtcN4LnwP76JjmxMc3nO9F8Ig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuanVzdHdhdGNo/LmNvbS9wb3N0ZXIv/MzIzMDM0NTkwL3Mz/MzIvb3JlLWRha2Ut/bGV2ZWwtdXAtbmEt/a2VuLXJlYXdha2Vu/aW5n",
        details: "Animation, Comedy, Action | 480p [300MB] | 720p [900MB] | 1080p [2.1GB]",
        date: "3 Jul 2025",
        category: "animation",
        link: "/public/download-solo-leveling-s01-s02-hindi-english-japanese-480p-720p-1080p.html"
    },
    {
        id: 4,
        title: "How to train Your Dragon (2025)",
        poster: "https://imgs.search.brave.com/yPR-5QrLC0SRA0qxSVRKHY3xrNGnZUkZIb_U33EDk40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16TmxOVEJr/Wm1FdFl6SmlNeTAw/T1RjekxXRTRaR0l0/TVRnNFlUUm1ZVFUw/TkdKbVhrRXlYa0Zx/Y0djQC5qcGc",
        details: "Animation, Family | 480p [320MB] | 720p [950MB] | 1080p [2.3GB]",
        date: "14 Jun 2025",
        category: "animation",
        link: "/public/download-how-to-train-your-dragon-2025-hindi-english-480p-720p-1080p.html"
    },
    {
        id: 5,
        title: "Stranger Things (2016-2025)",
        poster: "https://imgs.search.brave.com/DjdRnJX4d6aIto2wNSSgfut27nHFA9llXNRjt3WUMN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFncWVSMFlRTUwu/anBn",
        details: "Action, Thriller | 480p [350MB] | 720p [1GB] | 1080p [2.2GB]",
        date: "28 Jun 2025",
        category: "Thriller",
        link: "/public/download-stranger-things-hindi-480p-720p-1080p.html"
    },
    {
        id: 6,
        title: "Sonic the Hedgehog 3",
        poster: "https://imgs.search.brave.com/4_C2QHESOi5bIUZKLI80Nm3ZWL4Ss1zq_QHFcuyiOys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxMzBOejVEWG9M/LmpwZw",
        details: "Animation, Comedy | 480p [370MB] | 720p [1.1GB] | 1080p [2.4GB]",
        date: "3 Jul 2025",
        category: "animation",
        link: "/public/download-sonic-the-hedgehog-3-2024-hindi-english-480p-720p-1080p.html"
    },
    {
        id: 7,
        title: "Saiyaara (2025)",
        poster: "https://imgs.search.brave.com/5tgNDrgAe5af39n72VLLE4iFxo1rYihLuypP_S9FMQw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlkyTXhNekU0/WldVdFpUSmpPUzAw/WmpRMkxXRTVOV0V0/WW1GbE9UWTJNekZo/WVRNelhrRXlYa0Zx/Y0djQC5qcGc",
        details: "Romance, Drama | 480p [320MB] | 720p [950MB] | 1080p [2.3GB]",
        date: "14 Jun 2025",
        category: "romance",
        link: "/public/download-saiyaara-2025-hindi-movie.html"
    },
    {
        id: 8,
        title: "The Shiunji Family Children (2025)",
        poster: "https://imgs.search.brave.com/YjbuiJYCbLwBdMGc97hlD2migl2-GSicbi21T-EnYV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllUZzBaV1Zp/T0RVdE9EWXhNeTAw/TUdKaExUZzBOekF0/TW1FM04yWXhPVEJt/WTJJMVhrRXlYa0Zx/Y0djQC5qcGc",
        details: "Romance, Animation | 480p [350MB] | 720p [1GB] | 1080p [2.5GB]",
        date: "24 May 2025",
        category: "romance, animation",
        link: "/public/download-the-shiunji-family-children-season-1-multi-audio-hindi-english-japanese.html"
    },
    // ...add 42 more trending movies/series with unique ids, titles, posters, details, dates, and categories...
    // Example:
    {
        id: 9,
        title: "Sitaare Zameen Par (2025)",
        poster: "https://imgs.search.brave.com/xZQ6nntM8BRzffCEReFegDVjPcC188Bgv4MguP7QRYY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqZGpPRGRp/TVRRdFlXSXdaaTAw/TlRReUxXRTBZV0l0/TXprM01UQmhPR1V5/TkRZM1hrRXlYa0Zx/Y0djQC5qcGc",
        details: "Comedy, Drama, Sport | HD-Rip | 480p [350MB] | 720p [1GB] | 1080p [2.5GB]",
        date: "10 May 2025",
        category: "bollywood",
        link: "/public/download-sitaare-zameen-par-2025-hindi-movie.html"
    },
    {
        id: 10,
        title: "Avengers Endgame (2019)",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
        details: "Adventure, Science Fiction, Action| Marvel | 480p [400MB] | 720p [1.2GB] | 1080p [2.8GB]",
        date: "16 Jun 2025",
        category: "hollywood",
        link: "/public/download-avengers-endgame-2019-dual-audio-hindi-english.html"
    },
    // ...repeat for ids 11-50 with trending movies/series...
];
// Pagination variables
let currentPage = 1;
const MOVIES_PER_PAGE = 15;
function loadMovies(moviesToShow = currentMovies, page = 1) {
    moviesGrid.innerHTML = '';
    const startIdx = (page - 1) * MOVIES_PER_PAGE;
    const endIdx = startIdx + MOVIES_PER_PAGE;
    const pageMovies = moviesToShow.slice(startIdx, endIdx);

    pageMovies.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        moviesGrid.appendChild(movieCard);
    });
    renderPagination(moviesToShow.length, page);
    animateCards();
}
function renderPagination(totalMovies, page) {
    const totalPages = Math.ceil(totalMovies / MOVIES_PER_PAGE);
    let pagination = document.querySelector('.pagination');
    if (!pagination) {
        pagination = document.createElement('div');
        pagination.className = 'pagination';
        moviesGrid.parentNode.appendChild(pagination);
    }
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn' + (i === page ? ' active' : '');
        btn.textContent = i;
        btn.dataset.page = i;
        btn.addEventListener('click', () => {
            currentPage = i;
            loadMovies(currentMovies, currentPage);
        });
        pagination.appendChild(btn);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Shuffle movies on each page load
    currentMovies = shuffleArray([...movies]);
    loadMovies(currentMovies, currentPage);
    setupEventListeners();
    setupAnimations();
    // Add event listeners to dropdown menu items for real filtering
    document.querySelectorAll('.dropdown-content a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = link.textContent.trim();
            let filteredMovies = [];
            // Web Series platforms
            if (["Netflix Originals", "Amazon Prime Series", "Disney+ Hotstar", "MX Player"].includes(text)) {
                filteredMovies = movies.filter(movie => movie.details.toLowerCase().includes(text.split(' ')[0].toLowerCase()));
            }
            // Dual Audio
            else if (["Hindi-English", "Hindi-Japanese", "Hindi-Korean", "Multi Audio"].includes(text)) {
                filteredMovies = movies.filter(movie => movie.details.toLowerCase().includes(text.toLowerCase()));
            }
            // Genre
            else if (["Action", "Comedy", "Drama", "Romance", "Thriller", "Animation"].includes(text)) {
                filteredMovies = movies.filter(movie => movie.details.toLowerCase().includes(text.toLowerCase()));
            }
            // By Year
            else if (["2025", "2024", "2023", "2022", "2021"].includes(text)) {
                filteredMovies = movies.filter(movie => movie.date.includes(text));
            }
            // If no match, show all
            else {
                filteredMovies = [...movies];
            }
            currentMovies = filteredMovies;
            currentPage = 1;
            loadMovies(currentMovies, currentPage);
        });
    });
});
// Intersection search: include new page items in search
let extraMovies = [
    {
        title: "Attack on Titan",
        details: "Anime | Action | 480p/720p/1080p",
        date: "2025",
        category: "anime",
        poster: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        link: "/public/download-attack-on-titan-final-season-2025-anime.html"
    },
    {
        title: "Chainsaw Man",
        details: "Anime | Adventure, Action, Romance | 480p/720p/1080p",
        date: "2022",
        category: "romance, animation",
        poster: "https://www.themoviedb.org/t/p/w1280/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
        link: "/public/download-chainsaw-man-2025-anime.html"
    },
    {
        title: "Breaking Bad",
        details: "Netflix | Crime, Drama, Thriller | 480p/720p/1080p",
        date: "2008",
        category: "netflix",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        link: "/public/new-movies-series-anime.html"
    },
    {
        title: "Peaky Blinders",
        details: "Series | Crime | 480p/720p/1080p",
        date: "2013",
        category: "series",
        poster: "https://media.themoviedb.org/t/p/w440_and_h660_face/9mYJP0UJs6Ch3DiGz0P7yv3hZJL.jpg",
        link: "/public/download-peaky-blinders-2022-series.html"
    },
    {
        title: "Ballerina",
        details: "Hollywood | Action | 480p/720p/1080p",
        date: "2025",
        category: "netflix",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
        link: "/public/download-ballerina-2025-hindi-english.html"
    },
    {
        title: "Jurassic World: Rebirth",
        details: "Movie | Action | 480p/720p/1080p",
        date: "2025",
        category: "hollywood",
        poster: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/q0fGCmjLu42MPlSO9OYWpI5w86I.jpg",
        link: "/public/download-jurassic-world-rebirth-2025.html"
    }
];
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === '') {
        currentMovies = [...movies, ...extraMovies];
    } else {
        currentMovies = [...movies, ...extraMovies].filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.details.toLowerCase().includes(searchTerm)
        );
    }
    currentPage = 1;
    loadMovies(currentMovies, currentPage);
    showSearchResults(currentMovies.length, searchTerm);
}
function handleCategoryFilter(category) {
    const categoryMap = {
        'BOLLYWOOD MOVIES': 'bollywood',
        'HOLLYWOOD MOVIES': 'hollywood',
        'DUAL JUNCTION': 'dual',
        'BOLLYWOOD MOVIES [NEW]': 'bollywood-new'
    };
    const filterKey = categoryMap[category];
    if (filterKey) {
        if (filterKey === 'dual') {
            currentMovies = movies.filter(movie => 
                movie.details.toLowerCase().includes('dual audio')
            );
        } else if (filterKey === 'bollywood-new') {
            currentMovies = movies.filter(movie => 
                movie.details.toLowerCase().includes('hindi') && 
                movie.date.includes('2025')
            );
        } else {
            currentMovies = movies.filter(movie => 
                movie.category === filterKey
            );
        }
    } else {
        currentMovies = [...movies];
    }
    currentPage = 1;
    loadMovies(currentMovies, currentPage);
}
function updateFilters() {
    const activeFilterBtns = document.querySelectorAll('.filter-btn.active');
    activeFilters = Array.from(activeFilterBtns).map(btn => btn.textContent.toLowerCase());
    if (activeFilters.length === 0) {
        currentMovies = [...movies];
    } else {
        currentMovies = movies.filter(movie => {
            const details = movie.details.toLowerCase();
            return activeFilters.some(filter => {
                if (filter.includes('p')) {
                    return details.includes(filter);
                }
                if (['netflix', 'amazon prime', 'disney+', 'apple tv+'].includes(filter)) {
                    return details.includes(filter.replace('+', ''));
                }
                return details.includes(filter);
            });
        });
    }
    currentPage = 1;
    loadMovies(currentMovies, currentPage);
}
// ...existing code...

// DOM Elements
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const alertClose = document.getElementById('alertClose');
const alertBanner = document.getElementById('alertBanner');

// Current state
let currentMovies = [...movies];
let activeFilters = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadMovies();
    setupEventListeners();
    setupAnimations();
});

// Load movies into grid
function loadMovies(moviesToShow = currentMovies) {
    moviesGrid.innerHTML = '';
    
    moviesToShow.forEach((movie, index) => {
        const movieCard = createMovieCard(movie, index);
        moviesGrid.appendChild(movieCard);
    });
    
    // Animate cards
    animateCards();
}

// Create individual movie card
function createMovieCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
        <div class="movie-info">
            <div class="release-date">${movie.date}</div>
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-details">${movie.details}</p>
        </div>
    `;
    
    // Link to custom landing page if 'link' property exists, else default
    card.addEventListener('click', () => {
        if (movie.link) {
            window.location.href = movie.link;
        } else {
            window.location.href = `/movie/${movie.id}`;
        }
    });
    
    return card;
}

// Handle movie card click
function handleMovieClick(movie) {
    // Removed download modal popup
    // window.location.href = `/movie/${movie.id}`;
}

// Show download modal
function showDownloadModal(movie) {
    // Removed download modal code
}

// Start download function
function startDownload(quality, title) {
    alert(`Starting download of ${title} in ${quality} quality...`);
    document.querySelector('.download-modal').remove();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Alert close
    if (alertClose) {
        alertClose.addEventListener('click', () => {
            alertBanner.style.display = 'none';
        });
    }
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            handleCategoryFilter(btn.textContent);
            updateActiveButton(btn, '.category-btn');
        });
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            updateFilters();
        });
    });
    
    // Pagination
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!btn.classList.contains('dots')) {
                handlePagination(btn.dataset.page);
                updateActiveButton(btn, '.page-btn');
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.download-modal');
            if (modal) {
                modal.remove();
            }
        }
        
        if (e.key === '/' && e.ctrlKey) {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

// Handle search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    if (searchTerm === '') {
        currentMovies = [...movies, ...extraMovies];
    } else {
        currentMovies = [...movies, ...extraMovies].filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.details.toLowerCase().includes(searchTerm)
        );
    }
    
    loadMovies(currentMovies);
    
    // Show search results count
    showSearchResults(currentMovies.length, searchTerm);
}

// Show search results
function showSearchResults(count, term) {
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    if (term) {
        const resultsDiv = document.createElement('div');
        resultsDiv.className = 'search-results';
        resultsDiv.innerHTML = `
            <div class="container">
                <p>Found ${count} results for "${term}"</p>
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .search-results {
                background: rgba(255,215,0,0.1);
                padding: 10px 0;
                border-bottom: 1px solid #ffd700;
            }
            
            .search-results p {
                margin: 0;
                color: #ffd700;
                font-weight: 600;
                text-align: center;
            }
        `;
        
        if (!document.head.querySelector('style[data-search-results]')) {
            style.setAttribute('data-search-results', 'true');
            document.head.appendChild(style);
        }
        
        const mainContent = document.querySelector('.main-content');
        mainContent.insertBefore(resultsDiv, mainContent.firstChild);
    }
}

// Handle category filtering
function handleCategoryFilter(category) {
    const categoryMap = {
        'BOLLYWOOD MOVIES': 'bollywood',
        'HOLLYWOOD MOVIES': 'hollywood',
        'DUAL JUNCTION': 'dual',
        'BOLLYWOOD MOVIES [NEW]': 'bollywood-new'
    };
    
    const filterKey = categoryMap[category];
    if (filterKey) {
        if (filterKey === 'dual') {
            currentMovies = movies.filter(movie => 
                movie.details.toLowerCase().includes('dual audio')
            );
        } else if (filterKey === 'bollywood-new') {
            currentMovies = movies.filter(movie => 
                movie.details.toLowerCase().includes('hindi') && 
                movie.date.includes('2025')
            );
        } else {
            currentMovies = movies.filter(movie => 
                movie.category === filterKey
            );
        }
    } else {
        currentMovies = [...movies];
    }
    
    loadMovies(currentMovies);
}

// Update filters
function updateFilters() {
    const activeFilterBtns = document.querySelectorAll('.filter-btn.active');
    activeFilters = Array.from(activeFilterBtns).map(btn => btn.textContent.toLowerCase());
    
    if (activeFilters.length === 0) {
        currentMovies = [...movies];
    } else {
        currentMovies = movies.filter(movie => {
            const details = movie.details.toLowerCase();
            return activeFilters.some(filter => {
                if (filter.includes('p')) {
                    return details.includes(filter);
                }
                if (['netflix', 'amazon prime', 'disney+', 'apple tv+'].includes(filter)) {
                    return details.includes(filter.replace('+', ''));
                }
                return details.includes(filter);
            });
        });
    }
    
    loadMovies(currentMovies);
}

// Handle pagination
function handlePagination(page) {
    console.log(`Loading page: ${page}`);
    
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Simulate loading
    moviesGrid.classList.add('loading');
    setTimeout(() => {
        moviesGrid.classList.remove('loading');
        loadMovies(currentMovies);
    }, 1000);
}

// Update active button
function updateActiveButton(clickedBtn, selector) {
    document.querySelectorAll(selector).forEach(btn => {
        btn.classList.remove('active');
    });
    clickedBtn.classList.add('active');
}

// Animate cards
function animateCards() {
    const cards = document.querySelectorAll('.movie-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Setup animations
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });
    
    // Observe elements
    document.querySelectorAll('.movie-card, .category-btn, .filter-btn').forEach(el => {
        observer.observe(el);
    });
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker registered'))
        .catch(err => console.log('Service Worker registration failed'));
}

// Console message
console.log('🎬 Vegamovies website loaded successfully!');
console.log('Features: Search, Filter, Download, Responsive Design');
