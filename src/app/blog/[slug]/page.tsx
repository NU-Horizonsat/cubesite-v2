import matter from "gray-matter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    date: string,
    slug: string,
}

const BlogPage = async ({ params: { slug } }: BlogPageProps) => {
    const files = (await fs.readdir(path.join(".", "public", "raw", "blog")))
        .filter(f => f.endsWith(".md"));

    const parsed = await Promise.all(files.map(async f => {
        const content = await fs.readFile(path.join(".", "public", "raw", "blog", f), { encoding: "utf-8" });
        return matter(content);
    }));
    const matterFile = parsed.find(f => f.data.slug === slug)!;

    // weird casting but makes our life easier
    // assumes that all properties are present,
    // but we'll probably crash later anyway if not.
    const data = matterFile.data as unknown as MatterMeta;
    const { content } = matterFile;

    return (
        <div>
            {JSON.stringify(data)}
            <article>
                <Markdown remarkPlugins={[remarkGfm]}>
                    {content}
                </Markdown>
            </article>
        </div>
    );
};

export async function generateStaticParams() {
    const filenames = (await fs.readdir(path.join(".", "public", "raw", "blog")))
        .filter(file => file.endsWith(".md"));

    const contents = await Promise.all(
        filenames.map(async f =>
            await fs.readFile(path.join(".", "public", "raw", "blog", f), { encoding: "utf-8" }))
    );

    return contents.map((content) => ({ slug: matter(content).data.slug as string }));
}

export default BlogPage;
