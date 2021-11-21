import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Note, Notes, FootNotesContext } from "./footnote";
import "./layout.css";

function generateRustPlaygroundLink(code: string): string {
  const start = "https://play.rust-lang.org/?code=";
  return start + encodeURIComponent(code);
}

function processRustCode(code: string): { preview: string; full: string } {
  let full = "";
  let preview = "";
  let in_hide = false;
  for (const line of code.split("\n")) {
    if (line == "// <hide>" || line == "// </hide>") {
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
  img: (props) => {
    const [alt, options] = (props.alt ?? "").split("#@");
    const style = JSON.parse(options ?? "{}");
    return (
      <div className="img-container">
        <img
          {...props}
          style={style}
          alt={alt}
          src={`/images/${props.src}`}
          loading="lazy"
        />
      </div>
    );
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
          <a target="_blank" href={generateRustPlaygroundLink(code.full)}>
            {"Rust Playground"}
          </a>
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

    const children = [];
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
    });
  });
  return (
    <div className="main-container">
      <FootNotesContext.Provider value={{ notes }}>
        <MDXProvider components={component}>{children}</MDXProvider>
      </FootNotesContext.Provider>
    </div>
  );
}
