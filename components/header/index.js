const Header = ({ backgroundColor }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "40px",
        backgroundColor,
      }}
    >Shared Header In Root Layout</div>
  );
};

export default Header;
