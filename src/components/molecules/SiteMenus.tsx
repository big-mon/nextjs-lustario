import MenuItem from "./MenuItem";

const SiteMenus = () => {
  return (
    <>
      <ul className="ml-auto hidden md:flex">
        <MenuItem text="Home" href="/" />
        <MenuItem text="About" href="/post/about" />
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
