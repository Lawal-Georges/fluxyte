// app/blog/[slug]/page.tsx
import BlogPost from '@/components/blog/BlogPost'

interface Props {
    params: {
        slug: string
    }
}

export default function BlogPostPage({ params }: Props) {
    return <BlogPost slug={params.slug} />
}