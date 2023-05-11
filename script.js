// Datos sobre Joy Division
const albums = ['Unknown Pleasures', 'Closer', 'Substance'];
const members = ['Ian Curtis', 'Bernard Sumner', 'Peter Hook', 'Stephen Morris'];
const songs = ['Transmission', 'Love Will tear us apart', 'Shadowplay'];
const biografia = ("Joy Division se formó en manchester")

// Funciones para mostrar contenido
function showAlbums() {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '<h2>Álbumes:</h2><ul>';

  for (let i = 0; i < albums.length; i++) {
    const albumLink = document.createElement('a');
    albumLink.href = `album-${i}.html`; // Enlace a la página del álbum correspondiente
    albumLink.innerHTML = albums[i]; // Texto del enlace
    albumLink.classList.add('album-link');

    albumLink.addEventListener('mouseover', function() {
      this.style.color = 'red'; // Cambiar el color al pasar el mouse
    });

    albumLink.addEventListener('mouseout', function() {
      this.style.color = 'white'; // Restaurar el color original al salir el mouse
    });

    const listItem = document.createElement('li');
    listItem.appendChild(albumLink);
    contentDiv.appendChild(listItem);
  }

  contentDiv.innerHTML += '</ul>';
}

function showMembers() {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '<h2>Miembros:</h2><ul>';

  for (let i = 0; i < members.length; i++) {
    const memberLink = document.createElement('a');
    memberLink.href = `members-${i}.html`; // Enlace a la página del álbum correspondiente
    memberLink.innerHTML = members[i]; // Texto del enlace
    memberLink.classList.add('member-link');

    memberLink.addEventListener('mouseover', function() {
      this.style.color = 'red'; // Cambiar el color al pasar el mouse
    });

  memberLink.addEventListener('mouseout', function() {
      this.style.color = 'white'; // Restaurar el color original al salir el mouse
    });

    const listItem = document.createElement('li');
    listItem.appendChild(memberLink);
    contentDiv.appendChild(listItem);
  }

  contentDiv.innerHTML += '</ul>';
}

function showSongs() {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '<h2>Canciones Emblemáticas:</h2><ul>';

  for (let i = 0; i < songs.length; i++) {
    contentDiv.innerHTML += `<li>${songs[i]}</li>`;
  }

  contentDiv.innerHTML += '</ul>';
}




// Asignar eventos a los botones
document.querySelector('#albumsBtn').addEventListener('click', showAlbums);
document.querySelector('#membersBtn').addEventListener('click', showMembers);
document.querySelector('#songsBtn').addEventListener('click', showSongs);


function scrollToTop() {
  window.scrollTo(0, 0); // Desplaza la ventana hacia la parte superior
}