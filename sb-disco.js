const $sbDisco ={
  GetInTheZone: {
    title: 'Get In The Zone!',
    year: 2020,
    link: `https://open.spotify.com/album/4JlsfnNH8MCDXR0ypy1zcm?si=QR95RbcgQqCkqJFK91ZNyg`,
    info: 'SB19’s debut full-length album, marking their official rise in the P-pop scene. It showcased their versatility and cemented their reputation as trailblazers in Filipino pop music.',
    songs: [
      'Alab (Burning)',
      'Go Up',
      'Tilaluha',
      'Love Goes',
      'Hanggang Sa Huli',
      'Wag Mong Ikunot Ang Iyong Noo',
      'Love Goes (EDM Version)',
      'Tilaluha (Instrumental)',
      'Hanggang Sa Huli (Instrumental)'
    ],
  },

  Pagsibol: {
    title: 'Pagsibol',
    year: 2021,
    link: `https://open.spotify.com/album/4bieHSYaRSMRAoDF47qfSf?si=XZ_mginDS_i90b9xYerX-w`,
    info: 'Their first EP, symbolizing growth (“pagsibol” means “to sprout”). It carried socially conscious themes and heartfelt tributes, resonating deeply with fans worldwide.',
    songs: [
      'What?',
      'MAPA',
      'Mana',
      'Bazinga',
      'Ikako',
      'SLMT'
    ],
  },

   Pagtatag: {
    title: 'Pagtatag!',
    year: 2023,
    link: `https://open.spotify.com/album/7svCelXfTenSbzFXKj3zGF?si=xDkR4Fa_Q4yHqT6CsnVJwg`,
    info: 'A bold, experimental release that highlighted SB19’s maturity in sound and artistry. It explored deeper emotions, complex arrangements, and global influences.',
    songs: [
      'Gento',
      'I Want You',
      'Crimzone',
      'Ilaw',
      'Liham',
      'Freedom'
    ],
  },

  SimulaAtWakas: {
    title: 'Simula at Wakas',
    year: 2025,
    link: `https://open.spotify.com/album/04tWizEPzUimMQaZKdZwzJ?si=thZp83aPSLeSXlGuBtTpLw`,
    info: 'Their latest EP, symbolizing both beginnings and endings (“simula at wakas”). It won Album of the Year at the 2025 P-Pop Music Awards, proving their continued dominance in the industry.',
    songs: [
      'DAM',
      'Time',
      '8TonBall',
      'Quit',
      'Shooting For The Stars',
      'Dungka!',
      'DAM (Extended Version)'
    ],
  },
};

function sbDisco(albumKey){
  const container = document.getElementById('sb-disco-info');
  container.innerHTML = '';

  const album = $sbDisco[albumKey];
  if(album){
    const div = document.createElement('div');
    div.className = 'info-card';
    div.id = 'sb-songs';

    const h1 = document.createElement('h1');
    h1.textContent = `${album.title}(${album.year})`;
    div.appendChild(h1);

    const link = document.createElement('p');
    link.innerHTML = `<a href="${album.link}" target="_blank">Listen on Spotify</a>`;
    div.appendChild(link);

    const hr = document.createElement('hr');
    div.appendChild(hr);

    const p = document.createElement('p');
    p.textContent = `${album.info}`;
    div.appendChild(p);

    const ul = document.createElement('ul');
    album.songs.forEach(song => {
      const li = document.createElement('li');
      li.textContent = song;
      ul.appendChild(li);
    });
    div.appendChild(ul);
    container.appendChild(div);
  }
}