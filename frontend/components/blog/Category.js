import React from "react";
import Link from "next/link";

const Category = ({ c }) => {
  return (
    <div>
      <div className="card-body">
        <Link href={`/categories/${c.slug}`}>
          <a
            className="shadow p-3 mb-5 bg-body rounded-3"
            style={{ textDecoration: "none" }}
          >
            {c.name}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Category;
