import type {NextPage} from "next";
import {posts, type Post} from "../data";
import {notFound} from "next/navigation";
import {useTranslations} from "next-intl";

const PostPage: NextPage<{params: {slug: Post["slug"]}}> = ({params}) => {
    const post = posts.find((post) => post.slug === params.slug);
    
    if (!post) notFound();
    
    const t = useTranslations(`Post.${post.slug}`);

    return (
        <div>
            <h1>{t("title")}</h1>
        </div>
    )
}

export default PostPage;
