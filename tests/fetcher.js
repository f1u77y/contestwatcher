'use strict';

(() => {
    const fetcherName = process.argv[2];
    const fetcher = require(`../fetchers/${fetcherName}`);
    console.log(`Testing ${fetcher.name}`);
    let upcoming = [];
    fetcher.updateUpcoming(upcoming).on('end', () => {
        console.log(upcoming);
    });
})();
