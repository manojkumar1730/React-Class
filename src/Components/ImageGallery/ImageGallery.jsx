import "./ImageGallery.css"
import img1 from '../../assets/Images/img1.jpg'
import img2 from '../../assets/Images/img2.jpg'
import img3 from '../../assets/Images/img3.jpg'
import img4 from '../../assets/Images/img4.jpg'

const ImageGallery = ()=>{
    return(
        <>
            <div className="image-gallery">
                <h1>Image Gallery</h1>
                <div className="images">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
        </>
    )
}

export default ImageGallery;