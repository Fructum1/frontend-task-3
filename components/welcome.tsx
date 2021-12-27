import { scroller } from "react-scroll";

export function Welcome() {
    const scrollToSection = () => {
        scroller.scrollTo("sightseens", {
          duration: 0,
          delay: 0,
          smooth: "smooth",
        });
      };
    
    return (
        <section className="welcome" id="welcome">
            <div className="welcome__wrapper">
                <h1 className="welcome__title">Хакасия</h1>
                <div className="welcome__subtitle">Туристическое Агенство Республики Хакасия</div>
            </div>
            <button className="welcome__arrow" onClick={scrollToSection}>
                <img src="img/icon.svg" alt=""></img>
            </button>
        </section>
    )
}