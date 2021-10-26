import s from "./Section.module.css";

function Section({ title, children }) {
  return (
    <section className={s.section}>
      {title && <h1 className={s.section__title}>{title}</h1>}
      {children}
    </section>
  );
}

export default Section;
