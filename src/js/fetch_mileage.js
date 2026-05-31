async function loadStats() {
    const stats = await fetch('/data/strava-stats.json')
        .then(r => r.json());

    console.log(stats);

    document.getElementById('alltime-mileage').textContent =
        Math.round(stats.run_distance_miles*100)/100;
}

loadStats();