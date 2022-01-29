interface Props {
  collapsed: boolean;
  setNavCollapse: (state: boolean) => void;
}

export const HamburgerButton: React.FC<Props> = ({
  collapsed,
  setNavCollapse,
}) => {
  return (
    <button
      className={"hamburger hamburger--spin" + (collapsed ? " is-active" : "")}
      type="button"
      onClick={() => setNavCollapse(!collapsed)}
    >
      <span className="hamburger-box block h-9 w-9">
        <span className="hamburger-inner bg-gray-500 before:bg-gray-500 after:bg-gray-500"></span>
      </span>
    </button>
  );
};
