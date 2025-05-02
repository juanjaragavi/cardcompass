"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  return (
    <div className="break-words card-compass p-4 rounded-md shadow-card transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[16/9] relative rounded-md overflow-hidden">
          <Image
            alt={post.title}
            className="object-cover transition-transform hover:scale-105 duration-300"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
        <h2 className="font-heading font-semibold tracking-tighter text-cardcompass-navy text-2xl md:text-3xl">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-cardcompass-coral transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        <div className="font-body italic tracking-tighter text-cardcompass-slateGray">
          {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
        </div>
        <div className="font-body leading-relaxed md:text-lg line-clamp-4 text-cardcompass-slateGray">
          {post.description}
        </div>
        <div className="text-sm text-cardcompass-slateGray">
          {post.tags.map((tag) => (
            <div key={tag.id} className="mr-2 inline-block">
              <Link
                href={`/tag/${tag.name}`}
                className="hover:text-cardcompass-coral transition-colors"
              >
                #{tag.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 md:my-16 my-8",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
