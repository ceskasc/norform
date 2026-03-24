import https from 'https';

https.get('https://unsplash.com/s/photos/high-fashion-minimalist', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // extract all unique photo IDs
    const regex = /https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)\?auto=format/g;
    let matches;
    const ids = new Set();
    while ((matches = regex.exec(data)) !== null) {
      if (matches[1].length > 10) {
        ids.add(matches[1]);
      }
    }
    console.log(Array.from(ids).slice(0, 35).join('\n'));
  });
}).on('error', err => {
  console.log("Error: " + err.message);
});
