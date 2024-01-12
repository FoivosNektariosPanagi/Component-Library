import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Button from "./components/Button/Button";
import Badge from "./components/Badge";
import Banner from "./components/Banner/index";
function App() {
  return (
    <>
      <Banner type="success">
        <Banner.Title>success</Banner.Title>
      </Banner>
      <Banner type="warning">
        <Banner.Title>warning</Banner.Title>
      </Banner>
      <Banner type="success">
        <Banner.Title>success</Banner.Title>
        <Banner.Content>
          successsuccesssuccesssuccesssuccesssuccess
        </Banner.Content>
      </Banner>
      <Banner type="warning">
        <Banner.Title>warning</Banner.Title>
        <Banner.Content>
          warningwarningwarningwarningwarningwarning
        </Banner.Content>
      </Banner>

      <br />
      <br />

      <div className="BadgeChalenge">
        <Badge variant={"gray"}>Badge</Badge>
        <Badge variant={"red"}>Badge</Badge>
        <Badge type="pill" variant={"gray"}>
          Badge
        </Badge>
        <Badge type="pill" variant={"red"}>
          Badge
        </Badge>
      </div>

      <br />
      <br />

      <main>
        <Button
          className={"redbackground"}
          onClick={() => console.log("Button clicked")}
          onMouseOver={() => console.log("Button hovered")}
        >
          Log in with Google
        </Button>
        <Button size="lg" variant="success">
          Log in with Google
        </Button>
        <Button size="sm" variant="warning">
          Log in with Google
        </Button>
        <Button size="sm" variant="danger">
          Log in with Google
        </Button>
      </main>

      <br />
      <br />

      <Menu onOpen={() => console.log("Opened/closed")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Check if the root is already created
if (!root.isMounted) {
  root.render(<App />);
} else {
  // Update the existing root if it's already mounted
  root.render(<UpdatedApp />);
}
