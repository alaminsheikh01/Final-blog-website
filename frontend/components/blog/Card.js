import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="custom_tag">#{t.name}</a>
      </Link>
    ));

  return (
    <div className="lead pb-4 content_fixed">
      <a href={`/blogs/${blog.slug}`}>
        <div className="row square_card">
          <div className="col-md-4">
            <section>
              <img
                className="img img-fluid"
                style={{ maxHeight: "auto", width: "100%" }}
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
              />
            </section>
          </div>
          <div className="col-md-8">
            <section>
              <h4 className="font-weight-bold h1_card">{blog.title}</h4>
              <div className="content_custom">{renderHTML(blog.excerpt)}</div>
              <div>
                <section>
                  <p className="mark lead custom_auther_name">
                    Written by{" "}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                      <a className="username_custom">
                        {blog.postedBy.username}
                      </a>
                    </Link>{" "}
                    | Published {moment(blog.updatedAt).fromNow()}
                    <p className="blog_tag">{showBlogTags(blog)}</p>
                  </p>
                </section>
              </div>
              <div></div>
            </section>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
