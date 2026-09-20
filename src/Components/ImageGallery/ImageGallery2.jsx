const ImageGallery2 = () =>{
    let imageUrls = ["./Images/img1.jpg","./Images/img2.jpg","./Images/img3.jpg"]
    return(
        <>
            <h1>Image Gallery 2</h1>
            {
                imageUrls.map((val)=>{
                    return(
                        <>
                        <img src={val} alt="no image" height="200"/>
                        </>
                    )
                })
            }
        </>
    )
}

export default ImageGallery2;