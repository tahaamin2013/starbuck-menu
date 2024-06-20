import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import Product from "../StarbucksProduct/Product";

const BlogDetails = ({ blog, slug: blogSlug }: { blog: any; slug: any }) => {
  return (
    <div className="uppercase mt-2 leading-4 tracking-[2px] font-bold text-slate-400 flex flex-wrap justify-center items-center gap-2">
      <p
        className="mx-3"
      >
        #{blog.tags[0]}
      </p>

      <time className="">
        {format(parseISO(blog.publishedAt), "LLL d, yyyy")}
      </time>
    </div>
  );
};

export default BlogDetails;
