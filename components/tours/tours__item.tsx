export interface TourItems {
    class: string,
    title: string,
    description: string,
    price: string,
}

export interface IToursProps {
    tour: TourItems,
    onClick?: (tour: IToursProps) => void
}

export function Tour(props: IToursProps) {
    return (
        <div className={props.tour.class}>
            <h3 className="tours-item__title">{props.tour.title}</h3>
            <p className="tours-item__descriptions">{props.tour.description}</p>
            <div className="tours-item__money">
                <p className="tours-item__moneyprice">
                    От
                    <span className="tours-item__moneypriceb"> {props.tour.price} </span>
                    р.
                </p>
                <button className="tours-item__buy">Купить</button>
            </div>
        </div>
    )
}