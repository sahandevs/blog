import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import "./layout.css";

function generateRustPlaygroundLink(code: string): string {
  const start = "https://play.rust-lang.org/?code=";
  return start + encodeURIComponent(code);
}

function processRustCode(code: string): { preview: string, full: string } {
  let full = "";
  let preview = "";
  let in_hide = false;
  for (const line of code.split("\n")) {
    if (line == "// <hide>" || line == "// </hide>" ) {
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
  }
}

/* eslint-disable */
const component = {
  img: (props) => {
    return (
      <img {...props} src={`./images/${props.src}`}/>
    )
  },
  pre: (props) => {
    const className = props.children.props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    const lang =
      matches && matches.groups && matches.groups.lang
        ? matches.groups.lang
        : "";

    let code = processRustCode(props.children.props.children.trim());

    let gotoPlaygroundButton = null;
    if (lang == "rust") {
      gotoPlaygroundButton = (
        <div className="playground-button">
          <a target="_blank" href={generateRustPlaygroundLink(code.full)}>{"Rust Playground"}</a>
        </div>
      );
    }

    return (
      <Highlight
        {...defaultProps}
        theme={undefined}
        code={code.preview}
        language={lang}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div style={{position: "relative"}}>
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
    if (!Array.isArray(props.children)) return <p {...props} />;
    const children = [];
    let key = 0;
    for (const child of props.children) {
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
    return <p {...props}>{children}</p>;
  },
};

export default function ({ children }) {
  return (
    <div className="main-container">
      <MDXProvider components={component}>{children}</MDXProvider>
    </div>
  );
}
