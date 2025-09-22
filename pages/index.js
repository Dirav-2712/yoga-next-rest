import Link from "next/link";
import { fetchPosts } from "../lib/api";

export default function Home({ posts }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
        }}
      >
        <div className="bg-black/50 p-6 rounded-lg text-center">
          <h1 className="text-5xl font-bold">Yoga & Wellness</h1>
          <p className="mt-4 text-xl">
            Find your balance, strength, and inner peace 🧘‍♀️
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Latest Posts</h2>
        {posts.map((post) => (
          <div key={post.ID} className="my-10 border-b pb-6">
            <h3 className="text-2xl font-semibold">
              <Link href={`/posts/${post.ID}`}>
                <span className="text-blue-600 hover:underline">
                  {post.title}
                </span>
              </Link>
            </h3>
            <p className="text-gray-500">By {post.author.name}</p>
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetchPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
}
