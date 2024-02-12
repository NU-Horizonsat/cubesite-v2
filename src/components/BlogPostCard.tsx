import type matter from "gray-matter";
import Link from "next/link";

interface BlogPostCardProps {
    data: matter.GrayMatterFile<string>,
}

const BlogPostCard = async ({ data }: BlogPostCardProps) => {
    return (
        <Link href={`/blog/${data.data.slug}`}>
            <div className="bg-gray-700 text-white m-3 p-4 rounded-xl">
                <p className="text-3xl text-bold mb-4">{data.data.title}</p>
                <p>
                    {data.data.author}
                    <span className="text-gray-300 text-md m-1 mx-4">{data.data.created.toLocaleDateString()}</span>
                </p>
                <p>{data.excerpt}</p>
            </div>
        </Link>
    );
}

export default BlogPostCard;

