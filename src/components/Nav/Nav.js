import genClass from "../../helpers/genClass";

export default function Nav() {
  const $ = genClass({ block: "nav", mods: { menu: ["hidden"] } });

  return (
    <div {...$("bar")}>
      <a {...$("home")} href="#">
        NOKIA
      </a>
      <button {...$("action")} type="button">
        <span>&#171;</span>
      </button>
      <nav {...$("menu")}>
        <ul {...$("list")}>
          <li {...$("item")}>
            <a {...$("link")} href="#features">
              FEATURES
            </a>
          </li>
          <li {...$("item")}>
            <a {...$("link")} href="#material">
              BUILD
            </a>
          </li>
          <li {...$("item")}>
            <a {...$("link")} href="#gaming">
              GAMING
            </a>
          </li>
          <li {...$("item")}>
            <a {...$("link")} href="#promotion">
              PRICING
            </a>
          </li>
          <li {...$("item")}>
            <a {...$("link")} href="#testimonials">
              REVIEWS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
