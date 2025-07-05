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
      },
      // {
      //   title: " جادوی Context",
      //   link: "/context-magic",
      //   badge: " جدیدترین | در دست نگارش",
      // },
    ],
  },
  {
    categoryTitle: "پروژه های آخر هفته‌ای",
    posts: [
      {
        title: "کنترل کردن USB Switcher با موبایل",
        link: "/usb-switcher",
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
  {
    categoryTitle: "نوشته‌های کوتاه",
    posts: [
      {
        title: "چطوری حافظه فعال جلوی کار کردنمون رو می‌گیره",
        link: "/working-memory",
      },
    ],
  },
  {
    categoryTitle: "زنده!",
    posts: [
      {
        title: "بازی‌های آنلاینی که بازی کردم!",
        link: "/mp-games",
        badge: "۱۰ خرداد ۱۴۰۴",
      },
    ],
  },
];

const Music = () => {

  return (
    <div style={{ flex: 2 }}>
    <h3>آخرین آهنگ</h3>
    <br />
    <ul>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2124685263&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <div
        style={{
          fontSize: 10,
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/on-a-whim-music"
          title="on a whim"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          on a whim
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/on-a-whim-music/jire"
          title="Jire"
          target="_blank"
          style={{
            color: "#cccccc",
            textDecoration: "none",
          }}
        >
          Jire
        </a>
      </div>
    </ul>
  </div>
  )
}

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
        <p>|</p>
        <a href="https://soundcloud.com/on-a-whim-music">Soundcloud</a>
      </div>

      <div className="post-list-container">
        {Categories.map((cat, i) => (
          <Category key={i} {...cat} />
        ))}
        <div className="category-container"></div>
        <Music />
        <div className="category-container"></div>
        <div className="category-container"></div>
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
