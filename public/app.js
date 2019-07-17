$(() => {

  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  $('#get-posts').click(() => {
    $.getJSON(`${BASE_URL}/posts`, (posts) => {
      posts.slice(0, 10).forEach((post) => {
        const $posts = $('#posts');
        const $article = $('<article>');
        const $title = $('<header>').text(`Title: ${post.title}`);
        const $body = $('<p>').text(post.body);
        const $footer = $('<footer>').text(`user: ${post.userId}`);
        $article.append($title, $body, $footer);
        $posts.append($article);
      });
    });
  });

});
