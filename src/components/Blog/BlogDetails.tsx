import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import Product from "../StarbucksProduct/Product";

const BlogDetails = ({ blog, slug: blogSlug }: { blog: any; slug: any }) => {
  return (
    <div className="uppercase leading-4 tracking-[2px] font-bold text-slate-400 flex flex-wrap justify-center items-center gap-2">
      <Product name="Caffè Americano" delay={0.1} />
      <Link
        href={`/categories/${slug(blog.tags[0])}`}
        className="mx-3 hover:text-white"
      >
        #{blog.tags[0]}
      </Link>

      <time className="">
        {format(parseISO(blog.publishedAt), "LLL d, yyyy")}
      </time>
    </div>
  );
};

export default BlogDetails;
