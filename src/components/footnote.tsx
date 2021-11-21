import * as React from "react";

export const FootNotesContext = React.createContext<{
  notes: string[];
}>({
  notes: [],
});

export function Note({ children }: { children: string }) {
  const context = React.useContext(FootNotesContext)!;
  context.notes.push(children);
  const id = context.notes.length;
  return (
    <sup id={`fnref-${id}`}>
      <a href={`#fn-${id}`} className="footnote-ref">
        {id}
      </a>
    </sup>
  );
}

export function Notes() {
  const context = React.useContext(FootNotesContext)!;

  return (
    <ol className="footnotes">
      {context.notes.map((text, i) => (
        <li key={i} id={`fn-${i + 1}`}>
          {text}
          <a href={`#fnref-${i + 1}`} className="footnote-backref">
            ↩
          </a>
        </li>
      ))}
    </ol>
  );
}
