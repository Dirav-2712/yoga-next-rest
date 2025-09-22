export const fetchPosts = async () => {
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_WP_SITE}/posts`
  );
  const data = await res.json();
  return data.posts;
};

export const fetchPostByID = async (id) => {
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/${process.env.NEXT_PUBLIC_WP_SITE}/posts/${id}`
  );
  const data = await res.json();
  return data;
};
