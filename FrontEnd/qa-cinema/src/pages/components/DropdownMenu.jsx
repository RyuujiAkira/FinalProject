const DropDown = () => {
  return (
    <>
      <DropdownButton title="Which movie" id="basic-nav-dropdown">
        <Dropdown.Item>Movie1</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Movie2</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Movie3</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Movie4</Dropdown.Item>
        <Dropdown.Divider />
      </DropdownButton>
    </>
  );
};

export default DropDown;
