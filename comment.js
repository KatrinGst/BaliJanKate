const commentForm = document.querySelector('#comments form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const comment = event.target.elements.comment.value;
  const timestamp = new Date().toLocaleString();
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=32`;
  const commentHtml = `
    <div class="comment">
      <p>${comment}</p>
      <div class="metadata">
        <img src="${avatarUrl}" alt="${name}'s avatar">
        <span>${name}</span>
        <span>${timestamp}</span>
      </div>
    </div>
  `;
  commentList.insertAdjacentHTML('beforeend', commentHtml);
  event.target.reset();
});