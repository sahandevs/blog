import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Note, Notes, FootNotesContext } from "./footnote";
import "./layout.css";
import { Helmet } from "react-helmet";

function generateRustPlaygroundLink(code: string): string {
  const start = "https://play.rust-lang.org/?edition=2021&code=";
  return start + encodeURIComponent(code);
}

function getCodeMetaData(meta: string): {
  lang: string;
  no_playground: boolean;
  multipart: { id: string } | undefined;
  button: [string, string] | undefined;
} {
  const parts = meta.split(",").map((x) => x.trim());
  const lang = parts[0].split("-")[1];
  const no_pg = parts.find((x) => x == "no_pg") != undefined;
  const btn = parts
    .filter((x) => x.startsWith("btn"))
    .map((x) => x.substring(4, x.length - 1).split("|"))[0];
  let multipart = parts.find((x) => x.startsWith("multipart:"));
  if (multipart != undefined) {
    multipart = multipart.split(":")[1];
  }

  return {
    lang,
    no_playground: no_pg,
    multipart: multipart == null ? undefined : { id: multipart },
    button: btn as any,
  };
}

let codeBank: Record<string, string[]> = {};

// this is really not how I should implement this but I'm lazy :).
function addCodeMultipart(id: string, code: string) {
  if (codeBank[id] == null) {
    codeBank[id] = [];
  }
  codeBank[id].push(code);
}

function getMultipartCode(id: string): string {
  return codeBank[id]?.join("\n");
}

function processRustCode(code: string): { preview: string; full: string } {
  let full = "";
  let preview = "";
  let in_hide = false;
  for (const line of code.split("\n")) {
    const line_t = line.trim();
    if (line_t == "// <hide>" || line_t == "// </hide>") {
      in_hide = !in_hide;
      continue;
    }
    full += "\n" + line;
    if (!in_hide) {
      preview += "\n" + line;
    }
  }
  return {
    full: full.trim(),
    preview: preview.trim(),
  };
}

/* eslint-disable */
const component = {
  Note,
  Notes,
  h1: (props) => {
    return (
      <>
        <h1>{props.children}</h1>
        {/* @ts-ignore */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>{props.children}</title>
          <meta property="og:title" content={props.children} />
          <meta property="og:site_name" content="Sahand's blog" />
        </Helmet>
      </>
    );
  },
  img: (props) => {
    const [alt, options] = (props.alt ?? "").split("#@");
    const style = JSON.parse(options ?? "{}");
    let src = props.src;
    if (!src.startsWith("http")) {
      src = `/images/${src}`;
    }
    return (
      <a className="img-container" href={src} target="_blank">
        <img {...props} style={style} alt={alt} src={src} />
      </a>
    );
  },
  pre: (props) => {
    const className = props.children.props.className || "";
    const meta = getCodeMetaData(className);
    let code = processRustCode(props.children.props.children.trim());
    if (meta.multipart != null) {
      addCodeMultipart(meta.multipart.id, code.full);
    }
    let gotoPlaygroundButton: any = null;
    if (meta.lang && meta.lang.includes("rust") && !meta.no_playground) {
      gotoPlaygroundButton = (
        <div className="playground-button">
          <a target="_blank" href={generateRustPlaygroundLink(code.full)}>
            {"Rust Playground"}
          </a>
        </div>
      );
    }

    if (meta.button) {
      gotoPlaygroundButton = (
        <div className="playground-button">
          <a target="_blank" href={meta.button[1]}>
            {meta.button[0]}
          </a>
        </div>
      );
    }

    return (
      <Highlight
        {...defaultProps}
        theme={undefined}
        code={code.preview}
        language={meta.lang as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div style={{ position: "relative" }}>
            {gotoPlaygroundButton}
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    );
  },
  p: (props) => {
    let propChildren = props.children;
    if (!Array.isArray(propChildren)) {
      propChildren = [propChildren];
    }

    const children: any[] = [];
    let key = 0;

    for (const child of propChildren) {
      if (typeof child === "string") {
        children.push(child);
      } else {
        children.push(
          React.cloneElement(child, {
            ...child.props,
            dir: "ltr",
            key,
          })
        );
      }
      key++;
    }
    return (
      <div {...props} className="text">
        {children}
      </div>
    );
  },
};

export default function ({ children }) {
  const [notes, setNotes] = React.useState([]);
  // Update footnotes in HMR:
  React.useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setNotes([]);
      codeBank = {};
    });
  }, []);
  return (
    <div className="main-container-wrapper">
      <div className="main-container">
        <FootNotesContext.Provider value={{ notes }}>
          <MDXProvider components={component}>{children}</MDXProvider>
        </FootNotesContext.Provider>
      </div>
    </div>
  );
}
