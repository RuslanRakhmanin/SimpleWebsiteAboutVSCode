const hitCounter = localStorage.getItem('hitCount') ? parseInt(localStorage.getItem('hitCount')) : 0;
document.getElementById('hitCounter').textContent = hitCounter;

// Increment the hit count and update the display
localStorage.setItem('hitCount', hitCounter + 1);