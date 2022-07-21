function updatePost(blogCategory) {
  return nestedUpdate(
    blogCategory,
    ["post", "id", "author", "name"],
    capitalize
  );
}

function updatePost(blogCategory) {
  return updatePostById(blogCategory, "12", (post) =>
    updateAuthor(post, capitalizeName)
  );
}

function updatePostById(category, id, modifyPost) {
  return nestedUpdate(category, ["post", id], modifyPost);
}

function updateAuthor(post, modifyUser) {
  return update(post, "author", modifyUser);
}

function capitalizeName(user, capitalizeName) {
  return update(user, "name", capitalizeName);
}

