import Link from "next/link";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__nav">
                    <p className="footer__subtitle">Меню</p>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <Link href="/#welcome">
                                <a className="footer__item-link">Главная</a>
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link href="/#sightseens">
                                <a className="footer__item-link">Достопримечательности</a>
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link href="/#tours">
                                <a className="footer__item-link">Туры</a>
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link href="/#contacts">
                                <a className="footer__item-link">Контакты</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__contacts">
                    <p className="footer__subtitle">Контакты</p>
                    <p className="footer__info">655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67
                        <br/>
                        Справочная служба: 8 (3902) 22-53-35, факс: 8 (3902) 24-30-71
                        <br/>
                        Электронная почта: kancler@vskhakasia.ru</p>
                </div>
                <p className="footer__copyright">Официальный сайт Агенства Туризма Республики Хакасия © 2021</p>
            </div>
        </footer>
    )
}