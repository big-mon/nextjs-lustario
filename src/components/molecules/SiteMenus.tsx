import MenuItem from "./MenuItem";

export const SiteMenus = () => {
  return (
    <>
      <ul className="flex ml-auto">
        <MenuItem text="Home" href="/" />
        <MenuItem text="About" href="/about" />
        <MenuItem
          text="Project"
          href="https://github.com/big-mon/nextjs-lustario"
        />
        <MenuItem text="Twitter" href="https://twitter.com/BIG_MON" />
      </ul>
    </>
  );
};

export default SiteMenus;
