export interface ISightseens__item {
    title: string;
    image: string;
    description: string;
    descriptionpk: string;
}

export interface ISightseensProps {
    ss: ISightseens__item,
    onClick?: (ss: ISightseens__item) => void
}

export function Sightseen(props: ISightseensProps) {
    return (
        <div className="sightseens__item">
            <img className="sightseens__img" src={props.ss.image} alt="sightseen"></img>
            <div className="sightseens__itemtext">
                <h4 className="sightseens__itemtext-title">{props.ss.title}</h4>
                <p className="sightseens__itemtext-main">{props.ss.description}</p>
                <p className="sightseens__itemtext-mainpk">{props.ss.description}
                    <br /> <br />{props.ss.descriptionpk}
                </p>
            </div>
        </div>
    )
}