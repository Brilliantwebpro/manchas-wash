import Seo from "../components/Seo.jsx";
import { blogPosts, brand } from "../data/siteData.js";
import heroImg from "../assets/Detailing images/360_F_397247724_XCpf2rqFdYkQ5NTW0ZkSA4dlQLY2eOv2.jpg";

const Blog = () => {
  return (
    <>
      <Seo
        title="Car Care Blog"
        description={`Helpful wash and detailing tips from ${brand.name}.`}
        path="/blog"
      />
      <section className="section">
        <div className="container">
          <div className="section-title">Car Care Blog</div>
          <p className="section-lead">
            Simple maintenance tips to keep your vehicle cleaner between
            appointments.
          </p>
          <div className="hero-banner" style={{ marginTop: 24 }}>
            <div>
              <span className="badge">Latest Tips</span>
              <h3 style={{ marginTop: 12 }}>
                Keep your paint and interior in better shape year-round.
              </h3>
              <p className="section-lead" style={{ marginTop: 12 }}>
                These are the same recommendations we share with our customers
                after service.
              </p>
            </div>
            <img src={heroImg} alt="Car care tips" />
          </div>
          <div className="grid grid-3" style={{ marginTop: 30 }}>
            {blogPosts.map((post) => (
              <article className="card" key={post.title}>
                <span className="badge">{post.date}</span>
                <h3 style={{ marginTop: 16 }}>{post.title}</h3>
                <p style={{ marginTop: 12, color: "var(--neutral-200)" }}>
                  {post.excerpt}
                </p>
                <span className="tag" style={{ marginTop: 16 }}>
                  Read more
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
