"use client";
import { getFeaturedBlogs } from "@/api/listings";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Blog = () => {
  const path = usePathname();
  const skeletonLoader = [1, 2, 3];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  const [thirdImageLoaded, setThirdImageLoaded] = useState(false);

  useEffect(() => {
    getFeaturedBlogs()
      .then((res) => {
        setData(res);
      })
      .finally(() => setLoading(false));
  }, []);
  const getImgLoadVar = (index) => {
    switch (index) {
      case 0:
        return firstImageLoaded;
      case 1:
        return secondImageLoaded;
      case 2:
        return thirdImageLoaded;
    }
  };

  const getImgLoadFunc = (index) => {
    switch (index) {
      case 0:
        setFirstImageLoaded(true);
        break;
      case 1:
        setSecondImageLoaded(true);
        break;
      case 2:
        setThirdImageLoaded(true);
        break;
    }
  };

  return (
    <>
      {loading
        ? skeletonLoader.map((sk) => (
            <div className="col-sm-6 col-lg-4" key={sk}>
              <div className="blog-style1">
                <div className="blog-img">
                  <Skeleton
                    // className="w-100 h-100"
                    variant="rectangular"
                    width={386}
                    height={250}
                  />
                </div>
                <div className="blog-content">
                  <div className="date"></div>
                  <a className="tag" href="#">
                    <Skeleton variant="rectangular" width={200} height={17} />
                  </a>
                  <h6 className="title mt-2">
                    <Skeleton variant="rectangular" width={300} height={25} />
                  </h6>
                </div>
              </div>
            </div>
          ))
        : data.map((blog, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="blog-style1">
                <div className="blog-img">
                  <Image
                    width={386}
                    height={271}
                    src={`https://www.indusre.com/newsimg/${blog.news_thumbnail}`}
                    alt="image"
                    role="button"
                    className={`${
                      !getImgLoadVar(index)
                        ? "opacity-0 position-absolute w-100 h-100 cover"
                        : "opacity-100 w-100 h-100 cover position-relative"
                    }}`}
                    onLoadingComplete={() => getImgLoadFunc(index)}
                  />

                  {!getImgLoadVar(index) ? (
                    <Skeleton
                      variant="rectangular"
                      className="w-100 cover"
                      width={386}
                      height={271}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="blog-content">
                  <div className="date">
                    <span className="month">
                      {new Date(blog.news_date).toDateString().split(" ")[1]}
                    </span>
                    <span className="day">
                      {new Date(blog.news_date).getDay()}
                    </span>
                  </div>
                  <a className="tag" href="#">
                    Indus Real Estate LLC
                  </a>
                  <h6 className="title mt-1">
                    {path != "/news-details" ? (
                      <Link href={`/news-details/?id=${blog.news_id}`}>
                        {blog.news_title}
                      </Link>
                    ) : (
                      <a href={`/news-details/?id=${blog.news_id}`}>
                        {blog.news_title}
                      </a>
                    )}
                  </h6>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default Blog;
