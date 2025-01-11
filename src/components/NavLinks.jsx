import { StyledNavLink, StyledLink } from "../MiscStyling";

function NavLinks({handleClick}) {

  return (
    <>
      <StyledNavLink
        to="/about"
        className="nav-link"
        onClick={handleClick}
      >
        <div className="tab-name">
          <span>about me</span>
          <div className="backdrop"></div>
        </div>
      </StyledNavLink>
      <StyledNavLink
        to="/projects"
        className="nav-link"
        onClick={handleClick}
      >
        <div className="tab-name">
          <span>projects</span>
          <div className="backdrop"></div>
        </div>
      </StyledNavLink>
      <StyledNavLink
        to="/relevant-work"
        className="nav-link"
        onClick={handleClick}
      >
        <div className="tab-name">
          <span>relevant work</span>
          <div className="backdrop"></div>
        </div>
      </StyledNavLink>
      <StyledLink
        to="footer"
        smooth={true}
        duration={500}
        className="nav-link"
        onClick={handleClick}
      >
        <div className="tab-name">
          <span>contact</span>
          <div className="backdrop"></div>
        </div>
      </StyledLink>
    </>
  );
};

export default NavLinks;