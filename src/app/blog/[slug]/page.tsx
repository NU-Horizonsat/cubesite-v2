import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import remarkRehype from "remark-rehype";
import { allArticles } from "@/util/blog";

interface BlogPageProps {
    params: {
        slug: string,
    },
}

interface MatterMeta {
    title: string,
    author: string,
    created: Date,
    updated: Date,
    slug: string,
    excerpt: string,
}

const BlogPage = async ({ params: { slug } }: BlogPageProps) => {
    // lots of work happening here, but this only runs _once_ (at build time), so this won't be slowing
    // the site down at runtime. On request only a static page gets sent
    const matterFile = (await allArticles()).find(f => f.data.slug === slug)!;

    // weird casting but makes our life easier
    // assumes that all properties are present,
    // but we'll probably crash later anyway if not.
    const data = matterFile.data as unknown as MatterMeta;

    // remove the excerpt section
    const content = matterFile.content.replace(/.*?^-{3}$/sm, "");

    return (
        <article className="mx-auto w-fit prose">
                <section className="w-fit">
                <h1 className="max-w-fit">{data.title}</h1>
                <div className="mb-4">
                    <span>By {data.author}</span>
                    <div>
                        <span className="mr-4">Published {data.created.toLocaleDateString()}</span>
                        :
                        <span className="ml-4">Updated {data.updated.toLocaleDateString()}</span>
                    </div>
                </div>
            </section>
            <section className="blog-content">
                <Markdown remarkPlugins={[remarkGfm, remarkMath, remarkRehype]}
                          rehypePlugins={[rehypeKatex, rehypeHighlight]}>
                    {content}
                </Markdown>
            </section>
        </article>
    );
};

export async function generateStaticParams() {
    return (await allArticles())
        .map(m => ({ slug: m.data.slug }));
}

export default BlogPage;
