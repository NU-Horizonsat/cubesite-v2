import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

/**
 * Return all blog articles with metadata parsed through gray-matter
 */
export async function allArticles() {
    const files = (await fs.readdir(path.join(".", "public", "raw", "blog"), {
        recursive: true,
        withFileTypes: true,
    })).filter(file => file.isFile() && file.name.endsWith(".md"))
        .map(f => path.join(f.path, f.name));

    return Promise.all(files.map(async f => {
        const content = await fs.readFile(f, {encoding: "utf-8"});
        return matter(content);
    }));
}
