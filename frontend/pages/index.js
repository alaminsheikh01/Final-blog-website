import Layout from "../components/Layout";
import Link from "next/link";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";

const Index = ({ router }) => {
  const head = () => (
    <Head>
      <title>Home page | {APP_NAME}</title>
      <meta
        name="description"
        content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Latest web developoment tutorials | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
      />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  return (
    <React.Fragment>
      {head()}
      <Layout className="invert">
        <article className="overflow-hidden invert">
          <div className="container mb-5 mt-5">
            <div className="row">
              <div className="col-md-8 show_text">
                <h3 className="font-weight-bold">
                  Data fetching in Next.js — How To Use SWR
                </h3>
                <h4>Published Nov 04, 2020☕ ☕ 8 min read</h4>
                <p>
                  Next.js offers several ways for fetching data since it
                  supports both client and server-side…
                </p>
                <button className="btn btn-sm rounded btn-outline-warning">
                  <a href="/">Read more</a>
                </button>
              </div>
              <div className=" col-md-4 rounded-4 d-none d-md-block d-lg-block">
                <img
                  src="./static/images/seoblog.jpg"
                  className="img-fluid rounded mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="flip flip-horizontal">
                  <div
                    className="front"
                    style={{
                      backgroundImage:
                        "url(" +
                        "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                        ")",
                    }}
                  >
                    <h2 className="text-shadow text-center h1">React</h2>
                  </div>
                  <div className="back text-center">
                    <Link href="/categories/category1">
                      <a>
                        <h3 className="h1">React Js</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The world's most popular frontend web development library
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="flip flip-horizontal">
                  <div
                    className="front"
                    style={{
                      backgroundImage:
                        "url(" +
                        "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                        ")",
                    }}
                  >
                    <h2 className="text-shadow text-center h1">Node</h2>
                  </div>
                  <div className="back text-center">
                    <Link href="/categories/category2">
                      <a>
                        <h3 className="h1">Node Js</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      The worlds most popular backend development tool for
                      JavaScript Ninjas
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="flip flip-horizontal">
                  <div
                    className="front"
                    style={{
                      backgroundImage:
                        "url(" +
                        "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                        ")",
                    }}
                  >
                    <h2 className="text-shadow text-center h1">Next</h2>
                  </div>
                  <div className="back text-center">
                    <Link href="/categories/ctategory3">
                      <a>
                        <h3 className="h1">Next Js</h3>
                      </a>
                    </Link>
                    <p className="lead">
                      A Production ready web framework for building SEO React
                      apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </React.Fragment>
  );
};

export default withRouter(Index);
