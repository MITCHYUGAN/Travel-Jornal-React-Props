import img1 from '../Img/img3.png'
import location from '../Img/location.png'
 
const TravelJornal = (props) =>{
    console.log(props.img)
    return(
        <div className='posts'>
            <div className='post'>
                <img className='image' src={props.image} />
                <div>
                    <div className='map'>
                        <div className='location'>
                            <img src={props.loImg} />
                            <p>{props.location}</p>
                        </div>
                        <p>View on Google Maps</p>
                    </div>
                    <div className='postContents'>
                        <h1 className='title'>{props.title}</h1>
                        <div>
                            <div className='date'>
                                <p>{props.startDate}</p>
                                <p>-</p>
                                <p>{props.endDate}</p>
                            </div>
                            <p className='description'>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                props.hr === 1 && 
                <hr className='hr' />
            }
        </div>
    )

}

export default TravelJornal