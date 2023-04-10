import * as React from "react";
import "./index.css";

type Posts = {
  categoryTitle: string;
  posts: { title: string; badge?: string; link: string }[];
}[];
const Categories: Posts = [
  {
    categoryTitle: "موتور جاوااسکریپت V8",
    posts: [
      {
        title: "V8 چیه و چطور کار می‌کنه؟ - قسمت ۱",
        link: "/v8",
      },
      {
        title: "Parser چیه و توی v8 چطوری کار می‌کنه؟ - قسمت ۲",
        link: "/v8-parser",
      },
      {
        title: "Interpreter Ignition چیه و توی v8 چطوری کار می‌کنه؟ - قسمت ۳",
        link: "/v8-ignition",
      },
      {
        title: "JIT Compiler چیه و چطور کار می‌کنه؟ - قسمت ۴",
        link: "/v8-jit",
        badge: "جدیدترین",
      },
    ],
  },
  {
    categoryTitle: "پروژه های آخر هفته‌ای",
    posts: [
      {
        title: "کنترل کردن USB Switcher با موبایل",
        link: "/usb-switcher"
      },
    ],
  },
  {
    categoryTitle: "محدود کننده نرخ یا Ratelimit",
    posts: [
      {
        title: "چالش های پیاده سازی ratelimiter برای یک CDN - قسمت ۱",
        link: "/ratelimit-p1",
      },
    ],
  },
];

// markup
const IndexPage = () => {
  return (
    <>
      <div className="social">
        <a href="https://github.com/sahandevs">GitHub</a>
        <p>|</p>
        <a href="https://twitter.com/sahandevs">Twitter</a>
        <p>|</p>
        <a href="https://t.me/sahandevs_ir">Telegram</a>
        <p>|</p>
        <a href="https://www.linkedin.com/in/sahandakbarzadeh/">Linkedin</a>
      </div>

      <div className="post-list-container">
        {Categories.map((cat, i) => (
          <Category key={i} {...cat} />
        ))}
      </div>
    </>
  );
};

function Category(props: Posts[0]) {
  return (
    <div className="category-container">
      <h3>{props.categoryTitle}</h3>
      <div className="hr" />
      <ul>
        {props.posts.map((post, i) => (
          <li key={i}>
            {post.badge && <span className="badge">{post.badge}</span>}
            <a href={post.link}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPage;
