import styled from '@emotion/styled';
import React, { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import { Link } from '../../Link';
interface NavItemProps {
  name: string;
  responsive?: boolean;
  unlink?: boolean;
  icon?: ReactElement;
  index?: number;
  nested?: ReactElement;
  to?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLLIElement>) => void;
}

const StyledNavItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const NavItem: FC<NavItemProps> = ({
  name,
  responsive,
  unlink,
  icon,
  index,
  nested,
  to,
  className,
  onClick
}): ReactElement => {
  let listItem: string | ReactElement = name;
  if (responsive === true) {
    listItem =
      name === 'Login' ? (
        <i className="fas fa-user-circle fa-2x"></i>
      ) : name === 'Search' ? (
        <i className="fas fa-search fa-lg"></i>
      ) : (
        listItem
      );
  }
  return (
    <>
      {/* <li title={name} className={`nav-item mx-10 px-10 ${className ? className : ""}`} onClick={onClick} >
            {unlink ? (icon ? icon : listItem) :
                <Link to={to ? to : `/${name.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, "-").toLowerCase()}`}>
                    {icon ? icon : listItem}
                </Link>
            }
        </li> */}
      {unlink ? (
        <StyledNavItem
          title={name}
          data-index={index}
          className={`nav-item ${className || ''}`}
          onClick={onClick}
        >
          {icon ? icon : listItem}
          {nested}
        </StyledNavItem>
      ) : (
        <Link
          url={
            to
              ? to
              : `/${name
                  .replace(/[^a-zA-Z ]/g, '')
                  .replace(/\s+/g, '-')
                  .toLowerCase()}`
          }
        >
          <StyledNavItem
            title={name}
            data-index={index}
            className={`nav-item ${className || ''}`}
            onClick={onClick}
          >
            {icon ? icon : listItem}
          </StyledNavItem>
        </Link>
      )}
    </>
  );
};

interface NavMenuProps {
  NavItems: ReactNode;
  className?: string;
}

const StyledNavMenu = styled.ul`
  display: flex;
`;

export const NavMenu: FC<NavMenuProps> = ({
  className,
  NavItems
}): ReactElement => {
  return (
    <nav className="menu">
      <StyledNavMenu className={`flex nav-items ${className || ''}`}>
        {NavItems}
      </StyledNavMenu>
    </nav>
  );
};
