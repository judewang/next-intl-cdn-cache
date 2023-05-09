export type Post = {
    slug: keyof Messages["Post"];
}

export const posts: Post[] = [
    {
        slug: "first",
    },
    {
        slug: "second",
    },
    {
        slug: "third",
    },
    {
        slug: "fourth",
    },
    {
        slug: "fifth",
    }
]
