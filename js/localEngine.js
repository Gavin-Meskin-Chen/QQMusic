var encodedLocalMusic = localMusic.map(item => ({
  title: item.title,
  author: item.author,
  url: encodeNonAscii(item.url),
  pic: encodeNonAscii(item.pic),
  lrc: encodeNonAscii(item.lrc)
}));

document.getElementById('heoMusic-page').classList.add('localMusic');

function encodeNonAscii(str) {
  return str.replace(/[^\x00-\x7F]/g, function(c) {
    return encodeURIComponent(c);
  });
}

const ap = new APlayer({
  container: document.getElementById('heoMusic-page'),
  lrcType: 3,
  audio: encodedLocalMusic,
  listFolded: window.innerWidth < 768 ? true : false
});

heo.setupMediaSessionHandlers(ap);