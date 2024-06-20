import { allBlogs } from "contentlayer/generated";
const BlogDetails = lazy(() => import("../BlogDetails"));
const RenderMdx = lazy(() => import("../RenderMdx"));
const Butybar = lazy(() => import("./Floating Bar"));
const TableofContents = lazy(() => import("./TableofContents"));
const BlogReaderImage = lazy(() => import("./image"));
import { lazy } from "react";
import Navbar from "../..";
import Footer from "../../Footer";

const BlogReading = ({ parmy, blogy }: { parmy: any; blogy: any }) => {
  const blog = allBlogs.find(
    (blog: any) => blog._raw.flattenedPath === parmy.slug
  );
  if (!blog) {
    // Handle case where the blog is not found
    return <div>Blog not found</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="mb-20 px-[140px] mt-16 flex items-center justify-center flex-col text-center">
        <div className="w-[900px] mb-2  text-center ">
          <h1 className="capitalize sm:text-3xl  md:text-4xl lg:text-5xl text-3xl font-bold ">
            {blog.title}
          </h1>
          <BlogDetails blog={blogy} slug={parmy.slug} />
        </div>

        <Butybar blogy={blogy} />
        <div className="flex gap-7 text-left">
          {/* <TableofContents parmy={parmy} /> */}
          <BlogReaderImage parmy={parmy} />
          <div className="w-[800px] mt-1">
            <RenderMdx blog={blogy} />
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogReading;
