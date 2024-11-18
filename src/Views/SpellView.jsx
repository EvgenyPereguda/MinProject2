
import SpellBG from '../assets/SpellBG.jpg';

export function SpellView({name, description}){

    return(
        <div className="card">
            <div className="card-title" >{name}</div>
            <div style={{
            backgroundImage: `url(${SpellBG})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            }}>
            <div className="card-description"             
            style={{
                minHeight:'7em', 
                padding: '0.1em',
                 verticalAlign: 'middle',
                 color:'wheat',
                 backgroundColor: 'rgba(0, 0, 0, 0.2)'
            
            }}>
                <span style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: 'normal'
                }}>
                {description}
                </span>
                
                </div>
            </div>
        </div>
    )
}