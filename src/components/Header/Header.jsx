import UserMenu from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { useGetUserQuery } from 'redux/API';

const activeLink = ({ isActive }) =>
  isActive ? 'nav-link active' : 'nav-link';

export default function Header() {
  const { data } = useGetUserQuery();

  return (
    <header>
      {!data ? (
        <nav>
          <ul>
            <NavLink to="/authorization" className={activeLink}>
              <li>Log in</li>
            </NavLink>
            <NavLink to="/registration" className={activeLink}>
              <li>Registration</li>
            </NavLink>
          </ul>
        </nav>
      ) : (
        <UserMenu data={data} />
      )}
    </header>
  );
}
