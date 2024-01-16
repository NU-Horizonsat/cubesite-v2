import { allArticles } from "@/util/blog";
import BlogPostCard from "@/app/components/BlogPostCard";

const BlogPage = async () => {
    const all = (await allArticles())
        .sort((a, b) => b.data.published - a.data.published);

    return (
        <section className="mx-auto max-w-fit">
            <h1 className="text-xl font-bold text-white">Horizon Blog</h1>
            <div className="grid grid-cols-3 gap-3">
                {all.map(a => <BlogPostCard key={a.data.slug} data={a} />)}
            </div>
        </section>
    )
};

export default BlogPage;
