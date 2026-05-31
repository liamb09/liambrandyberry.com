async function loadStats() {
    const stats = await fetch('/data/strava-stats.json')
        .then(r => r.json());

    console.log(stats);

    document.getElementById('alltime-mileage').textContent =
        Math.round(stats.all_run_totals.distance/1609*100)/100;
}

loadStats();