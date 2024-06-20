"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import { allBlogs } from "@/.contentlayer/generated";
import Categories from "@/src/components/Blog/Categories";
import { slug } from "github-slugger";

const SearchPage = ({ parmy }: { parmy: any }) => {
  const router: any = useRouter();
  const { q } = router.query || { q: "" };
  const [searchTerm, setSearchTerm] = useState(q);
  const [isTyping, setIsTyping] = useState(false); // New state to track typing status
  const paths: { slug: string }[] = [{ slug: "all" }];

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsTyping(!!e.target.value.trim()); // Set isTyping to true if there is input
  };

  const filteredBlogs = allBlogs.filter((blog) => {
    const normalizedTitle = blog.title.toLowerCase();
    const normalizedQuery = searchTerm.toLowerCase();

    return (
      normalizedTitle.includes(normalizedQuery) &&
      blog.tags &&
      blog.tags.some((tag: string) => {
        const slugified = slug(tag);
      
        if (
          parmy.slug === "all" &&
          (!isTyping ? !blog.jfkFeatured : blog.jfkFeatured)
        ) {
          return true;
        }
      
        return slugified === parmy.slug;
      })
    );
  });

    const getUniqueCategories = (blogs: any[]) => {
    const categoriesSet = new Set<string>();
    blogs.forEach((blog) => {
      if (blog.tags) {
        blog.tags.forEach((tag: string) => {
          const slugified = slug(tag);
          categoriesSet.add(slugified);
          paths.push({ slug: slugified });
        });
      }
    });
    return [...Array.from(categoriesSet)];
  };

  const extraClassnames: { [key: string]: string } = {
    all: "mr-5",
  };

  const maxFeaturedBlogs = 5;
  const featuredBlogs = allBlogs
    .filter((blog) => blog.jfkFeatured === true)
    .slice(0, maxFeaturedBlogs);

  return (
    <div>
      <Categories
        categories={getUniqueCategories(allBlogs)}
        currentSlug={parmy.slug}
        extraClassnames={extraClassnames}
      />

      <div className="grid grid-cols-1 items-center gap-5 sm:mt-2 mt-7 text-sm md:grid-cols-2">
        <div className="relative col-span-1">
          <input
            type="text"
            placeholder="Search articles…"
            value={searchTerm}
            onChange={handleSearchInputChange}
            className="w-full rounded-full border focus:!border-primary border-slate-200 bg-slate-50 px-4 py-2 text-base focus:bg-transparent dark:border-neutral-800 dark:bg-neutral-800 
            dark:text-neutral-50 text-slate-900 transition-all dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950"
          />
        </div>
      </div>

      {/* {parmy.slug === "all" && !isTyping && (
        <FeaturedPostsDesign blogs={allBlogs} featuredBlogs={featuredBlogs} />
      )} */}

      <div className="mt-5 sm:mt-10 md:mt-24 sx:mt-32 flex flex-col gap-10">
        {parmy.slug === "all" && !isTyping && (
          <h2 className="text-5xl font-bold">Blogs</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16">
          {filteredBlogs.map((blog, index: number) => (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
