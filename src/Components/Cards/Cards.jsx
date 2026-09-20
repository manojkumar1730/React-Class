import { cardData } from "./cardsData";
import './Cards.css'

const Cards = () =>{
    // console.log(cardData);
    return(
        <>
        <div className="cards">
            <h1>Cards</h1>
            <div className="container">
                {
                    cardData.map((objectData)=>{
                        let {imageUrl,title,desc} = objectData;
                        return(
                            <>
                            <div className="card">
                                <div className="image">
                                    <a href={imageUrl} target="_blank">
                                        <img src={imageUrl} alt="No image" />
                                    </a>
                                </div>
                                <div className="title">{title}</div>
                                <div className="desc">{desc}</div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Cards;