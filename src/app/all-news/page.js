import Pagination from "@/components/blog/Pagination";
import BlogFilter from "@/components/blog/blog-list-v3/BlogFilter";
import BlogFilterContainer from "@/components/blog/blog-list-v3/BlogFilterContainer";
import Header from "@/components/home/home-v2/Header";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

export const metadata = {
  title: "Indus Real Estate LLC | Dubai Luxury Properties",
};

const AllNewsPage = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Start */}
      <section className="breadcumb-section pt130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">All Blogs</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">Blogs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Start */}

      {/* Blog Section Area */}
      <BlogFilterContainer/>
      {/* End Blog Section Area */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default AllNewsPage;
