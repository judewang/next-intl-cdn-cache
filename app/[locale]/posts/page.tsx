import {Link, useTranslations} from "next-intl";
import {posts} from "./data";

export default function PostList() {
    const t = useTranslations("Post");

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-12">Post list</h1>
            <ul className="space-y-12">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/posts/${post.slug}`} className="text-sky-700 p-4 underline rounded">
                            {t(`${post.slug}.title`)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>    
    )
}
