import PostPreview from '../components/post-preview';

const defaultImg = '/assets/blog/dynamic-routing/cover.jpg';
const defaultDate = '2020-03-16T05:35:07.322Z';

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={defaultImg}
            date={defaultDate}
            author={post.userId}
            slug={post.id}
            body={post.body}
          />
        ))}
      </div>
    </section>
  )
}
