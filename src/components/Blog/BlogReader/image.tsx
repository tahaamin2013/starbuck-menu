import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import React from "react";
import Product from "../../StarbucksProduct/Product";

interface BlogReaderImageProps {
  parmy: any;
}

const BlogReaderImage: React.FC<BlogReaderImageProps> = ({ parmy }) => {
  const blog = allBlogs.find(
    (blog: any) => blog._raw.flattenedPath === parmy.slug
  );

  if (!blog) {
    // Handle case where the blog is not found
    return <div>Blog not found</div>;
  }

  return (
    <div>
      {blog.image && (
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          draggable={false}
          width={blog.image.width}
          height={blog.image.height}
          className="rounded-full h-[240px] w-[250px] object-cover myshadow-black"
          priority
          sizes="100vw"
        />
      )}
    </div>
  );
};

export default BlogReaderImage;
