$(() => {

  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  $('#new-post').on('submit', (event) => {
    event.preventDefault();
    $.post(`${BASE_URL}/posts`, $('#new-post').serialize(), (post) => {
      appendPost(post, $('#posts'));
    });
  });

  const appendPost = (post, $posts) => {
    
    const $article = $('<article>');
    const $title = $('<header>').text(`Title: ${post.title} (${post.id})`);
    const $body = $('<p>').text(post.body);

    $.getJSON(`${BASE_URL}/users/${post.userId}`, (user) => {
      const $footer = $('<footer>').text(`User: ${user.name} (${user.email})`);
      $article.append($title, $body, $footer);
      $posts.append($article);
    });
  };

  $('#get-posts').click(() => {
    const $posts = $('#posts');
    $posts.empty();
    // $.getJSON(`${BASE_URL}/posts`, (posts) => {
    //   posts.slice(5, 15).forEach((post) => {
    //     appendPost(post, $posts);
    //   });
    // });
    $.getJSON(`${BASE_URL}/posts`)
      .done((posts) => {
        posts.slice(5, 15).forEach((post) => {
          appendPost(post, $posts);
        });
      })
      .fail((error) => {
        console.error(error);
      });
  });

});
