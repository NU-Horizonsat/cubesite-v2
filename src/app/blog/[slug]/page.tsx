import matter from "gray-matter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import remarkRehype from "remark-rehype";

import fs from "node:fs/promises";
import path from "node:path";

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
}

const BlogPage = async ({ params: { slug } }: BlogPageProps) => {
    // lots of work happening here, but this only runs _once_ (at build time), so this won't be slowing
    // the site down at runtime. On request only a static page gets sent

    const files = (await fs.readdir(path.join(".", "public", "raw", "blog"), {
        recursive: true,
        withFileTypes: true,
    }))
        .filter(f => f.isFile() && f.name.endsWith(".md"))
        .map(f => path.join(f.path, f.name));

    const parsed = await Promise.all(files.map(async f => {
        const content = await fs.readFile(f, { encoding: "utf-8" });
        return matter(content);
    }));
    const matterFile = parsed.find(f => f.data.slug === slug)!;

    // weird casting but makes our life easier
    // assumes that all properties are present,
    // but we'll probably crash later anyway if not.
    const data = matterFile.data as unknown as MatterMeta;
    const { content } = matterFile;

    return (
        <main className="mx-auto w-fit">
            <section className="w-fit">
                <h1 className="max-w-fit">{data.title}</h1>
                <div>
                    <span>By {data.author}</span>
                    <div>
                        <span>Published {data.created.toLocaleDateString()}</span>
                        :
                        <span>Updated {data.updated.toLocaleDateString()}</span>
                    </div>
                </div>
            </section>
            <article className="prose">
                <Markdown remarkPlugins={[remarkGfm, remarkMath, remarkRehype]}
                          rehypePlugins={[rehypeKatex, rehypeHighlight]}>
                    {content}
                </Markdown>
            </article>
        </main>
    );
};

export async function generateStaticParams() {
    const filenames = (await fs.readdir(path.join(".", "public", "raw", "blog"), {
        recursive: true,
        withFileTypes: true,
    })).filter(file => file.isFile() && file.name.endsWith(".md"))
        .map(f => path.join(f.path, f.name));

    const contents = await Promise.all(
        filenames.map(async f =>
            await fs.readFile(path.join(f), { encoding: "utf-8" }))
    );

    return contents.map((content) => ({ slug: matter(content).data.slug as string }));
}

export default BlogPage;
