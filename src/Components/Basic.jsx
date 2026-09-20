import funnyImage from '../assets/Images/images.jpg'

// /-->child , ./-->sibling , ../-->parent , ../../-->Grand parent
// for css and images it will not show suggestion

const Basic =()=>{
    let num = 100;
    let sum = num +num;
    let persion={
        name:"Dinga",
        lname:"Raja",
        place:"Goa"
    }
    let otp = Math.floor(Math.random()*9000+1000);
    let html = "Hyper Text Mark Language";
    let imageUrl = 'https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww';
    
    let heading = {
        color :"red",
        textAlign :"center",
        backgroundColor : "yellow",
        fontSize : "3rem"
    }
    return(
        <>
        {/* In this all the tags are paired only */}


        {/* Static Content */}
            <h1>Basic of React JS</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque cumque porro quo veniam illum. Aliquam reiciendis minima libero sed repudiandae temporibus omnis maxime rerum, quo optio, quis facere? Magnam, blanditiis.
            Similique, alias est! Ratione amet ullam veniam voluptatum officia repellat dolores consequatur, laboriosam alias, ea dignissimos. Maxime, fuga molestias vero, minus voluptatem tenetur eum, rem ut aliquid voluptas sed culpa?</p>

        {/* Dynsmic content */}
            <h2>{num}</h2>
            <h2>{num + num}</h2>

        {/* Staatic and dynamic content */}
            <h2>{num}+{num}={sum}</h2>

            <h2>{persion.name} is from {persion.place}</h2>

            <h2>{otp}</h2>

            <h2 title={html}>HTML</h2>

            <img src={imageUrl} alt="No image" height="400" />

            {/* Apply CSS */}
            {/* Inline CSS */}
            <h2 style={heading}>Welcome</h2> 

            <p style={{color:"blue",fontWeight:"bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates tempora voluptatum consequatur eum in vero eius, amet perspiciatis saepe, sapiente eveniet inventore, eaque laborum illo beatae nobis animi incidunt!</p>

            <img src={funnyImage} alt=""  height="400"/>

            {/* If image is present in public folder no need to write import statment directly you can give path skiping public */}
            <img src="./Images/tiger.jpg" alt="" height={400} />
        </>
    )
}
export default Basic