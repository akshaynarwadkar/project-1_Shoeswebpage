const Navigation = () => {
  return (
    <nav className="flex">
      <img src="/assets/brand_logo.png"></img>
      <div>
        <ul className="list">
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
      </div>

      <button className="prime-button">Login</button>
    </nav>
  );
}
export default Navigation