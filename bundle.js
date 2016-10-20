const fs = require('fs');

console.log(__dirname);
fs.readdir(__dirname, function(err, items) {
  const gifs = items.filter((item) => {
    return item.split('').splice(-4, 4).join('') === '.gif'
  });
  fs.writeFile('gifs.json', JSON.stringify({ gifs: gifs }));
});
