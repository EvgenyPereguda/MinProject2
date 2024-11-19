
export function CharacterView({name, image, ancestry, house}){


    return(
        <div className="card">
            <div className="card-title">{name}</div>
            <img loading="lazy" class="card-image" src={image} alt="card-image"/>
            <div class="card-description">{ancestry}</div>
            <div class="card-description">{house}</div>
        </div>

    )

}