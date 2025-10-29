document.getElementById('add-btn').addEventListener('click', () => {
  const fileInput = document.getElementById('photo-file');
  const caption = document.getElementById('photo-caption').value.trim();

  if (!fileInput.files.length) {
    alert("Please choose a photo file.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const gallery = document.getElementById('gallery');

    const card = document.createElement('div');
    card.className = 'photo-card';

    const img = document.createElement('img');
    img.src = e.target.result;
    img.alt = caption || 'Photo';

    const cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = caption || 'No caption';

    card.appendChild(img);
    card.appendChild(cap);
    gallery.appendChild(card);

    // Clear inputs
    fileInput.value = '';
    document.getElementById('photo-caption').value = '';
  };

  reader.readAsDataURL(file);
});
