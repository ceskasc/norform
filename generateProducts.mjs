import fs from 'fs';

const goldenIds = [
  "1515886657613-9f3515b0c78f", "1483985988355-763728e1935b", "1509319117193-57bab727e09d",
  "1485968579580-b6d095142e6e", "1445205170230-053b83016050", "1469334031218-e382a71b716b",
  "1539533113208-f6df8cc8b543", "1551488831-00ddcb6c6bd3", "1576566588028-4147f3842f27",
  "1507680434567-5739c80be1ac", "1618331835717-801e976710b2", "1594938298603-c8148c4dae35",
  "1496747611176-843222e1e57c", "1605763240000-7e93b172d754", "1581044777550-4cfa60707c03",
  "1550596334-7bb40a71b6bc", "1596755094514-f87e34085b2c", "1490481651871-ab68de25d43d",
  "1591047139829-d91aecb6caea", "1594633312681-425c7b97ccd1", "1620799139834-6b8f844fbe61",
  "1582142407894-ec85a1260a46"
];

const adjectives = ["Fluid", "Architectural", "Draped", "Structured", "Essential", "Raw", "Silken", "Woolen", "Quiet", "Monolithic", "Tailored", "Deconstructed", "Weighted", "Gossamer", "Brushed", "Ribbed"];
const nouns = ["Overcoat", "Trousers", "Tunic", "Knit", "Cardigan", "Blazer", "Slip Dress", "Camisole", "Maxi Skirt", "Vest", "Rollneck", "Shirting", "Culottes", "Shawl", "Bodice", "Pleated Skirt"];
const categories = ["Outerwear", "Bottoms", "Tops", "Knitwear", "Dresses", "Tailoring", "Accessories"];
const collections = ["Soft Structure", "Winter Light", "Essential Form", "Natural Depth", "Studio Neutrals"];
const materials = ["100% Virgin Wool", "Organic Silk", "Undyed Cashmere", "Linen/Silk Blend", "Heavy Crepe", "Brushed Alpaca", "Cotton Poplin", "Merino and Silk"];
const descs = [
  "A study in absolute minimalism. The fabric dictates the form, dropping heavy and straight.",
  "Constructed without visible seams. A masterclass in reductive architecture for the body.",
  "Breathable, unbothered, and completely timeless. Designed to layer natively over our core pieces.",
  "An exploration of negative space. The silhouette stands away from the wearer in a rigid yet soft shell.",
  "Meticulously woven to achieve a texture that catches the light like running water.",
  "Stripped of all hardware and excess. Fastens with a single concealed closure.",
  "Generous proportions allow for complete freedom of movement. A staple for the colder months.",
  "Tailored with precision but worn with absolute ease. The perfect intersection of formal and casual."
];

let generatedProducts = [];

for (let i = 16; i <= 46; i++) {
  const name = adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const price = Math.floor(Math.random() * 80) * 10 + 200; // 200 to 990
  const collection = collections[Math.floor(Math.random() * collections.length)];
  const material = materials[Math.floor(Math.random() * materials.length)];
  const desc = descs[Math.floor(Math.random() * descs.length)];
  const imgId = goldenIds[Math.floor(Math.random() * goldenIds.length)];
  
  generatedProducts.push(`  {
    id: '${i}',
    name: '${name}',
    category: '${category}',
    price: ${price},
    description: '${desc}',
    material: '${material}',
    collection: '${collection}',
    image: 'https://images.unsplash.com/photo-${imgId}?q=80&w=1287&auto=format&fit=crop',
  }`);
}

const mockDataPath = './src/data/mockData.ts';
let content = fs.readFileSync(mockDataPath, 'utf8');

// Insert the new products right before the closing bracket of mockProducts
const endOfMockProductsIndex = content.indexOf('];\n\nexport const mockJournalEntries');
if (endOfMockProductsIndex > -1) {
  // Add a comma after the last item and append our new items
  const newContent = content.slice(0, endOfMockProductsIndex) + ',\n' + generatedProducts.join(',\n') + '\n' + content.slice(endOfMockProductsIndex);
  fs.writeFileSync(mockDataPath, newContent);
  console.log("31 additional products seamlessly injected.");
} else {
  console.log("Could not find the insertion point.");
}
