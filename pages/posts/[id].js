import { fetchPostByID, fetchPosts } from "../../lib/api";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading…</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500">By {post.author.name}</p>
      <div
        className="mt-4 text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await fetchPosts();
  const paths = posts.map((p) => ({ params: { id: p.ID.toString() } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await fetchPostByID(params.id);
  return { props: { post }, revalidate: 60 };
}
