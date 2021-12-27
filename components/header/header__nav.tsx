import ActiveLink from './ActiveNav'

export interface MenuVisible { isMenuVisible: boolean }

export function Header__nav(props: MenuVisible) {
    return (
        <nav className={`header__menu${props.isMenuVisible ? ' active' : ''}`}>
            <ul className="menu__items">
                <li className="menu__item">
                    <ActiveLink activeClassName="active" href="/#welcome">
                        <a className="nav__item-link">Главная</a>
                    </ActiveLink>
                </li>
                <li className="menu__item">
                    <ActiveLink activeClassName="active" href="/#sightseens">
                        <a className="nav__item-link">Достопримечательности</a>
                    </ActiveLink>
                </li>
                <li className="menu__item">
                    <ActiveLink activeClassName="active" href="/#tours">
                        <a className="nav__item-link">Туры</a>
                    </ActiveLink>
                </li>
                <li className="menu__item">
                    <ActiveLink activeClassName="active" href="/#contacts">
                        <a className="nav__item-link">Контакты</a>
                    </ActiveLink>
                </li>
            </ul>
        </nav>
    )
}