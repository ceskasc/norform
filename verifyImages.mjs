import https from 'https';

const ids = [
  "1591047139829-d91aecb6caea", 
  "1594633312681-425c7b97ccd1", 
  "1620799139834-6b8f844fbe61", 
  "1604924151703-9ef4021272b1", 
  "1614749557444-23db954d7ce5", 
  "1629814467554-15f16d5e16ad", 
  "1582142407894-ec85a1260a46"
];

async function checkUrl(id) {
  return new Promise((resolve) => {
    https.request(`https://images.unsplash.com/photo-${id}?q=80&w=400`, { method: 'HEAD' }, (res) => {
      resolve({ id, status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 400 });
    }).on('error', (e) => resolve({ id, status: e.message, ok: false })).end();
  });
}

async function run() {
  for (let id of ids) {
    const res = await checkUrl(id);
    if (!res.ok) console.log("BROKEN:", id);
    else console.log("OK:", id);
  }
}
run();
