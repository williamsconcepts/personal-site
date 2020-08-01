import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import MobileNavWrapper from '../../styles/layout/MobileNavStyles';
import Hamburger from './Hamburger';

const MobileNav = ({ mobileNavIsOpen, action }) => {
  return (
    <MobileNavWrapper isOpen={mobileNavIsOpen}>
      <Hamburger mobileNavIsOpen={mobileNavIsOpen} action={action} />

      <div className="mobileNav" data-testid="mobileNav">
        <div className="darkLayer" onClick={action} />
        <div id="mobileMenu">
          <nav>
            <ul>
              <li>
                <Link activeClassName="activePage" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link activeClassName="activePage" to="/tutorials">
                  Tips
                </Link>
              </li>
              <li>
              <Link activeClassName="activePage" to="https://bpode.com">
                Podcast
              </Link>
            </li>
              <li>
                <Link activeClassName="activePage" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link activeClassName="activePage" to="/contact">
                 Say Hi
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </MobileNavWrapper>
  );
};

MobileNav.propTypes = {
  mobileNavIsOpen: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default MobileNav;
