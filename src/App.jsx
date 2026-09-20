import Basic from "./Components/Basic"
import React from "react" //This is for that React.Fragment tag(which is used insted of<></>)
import ImageGallery from "./Components/ImageGallery/ImageGallery"
import ImageGallery2 from "./Components/ImageGallery/ImageGallery2"
import Cards from "./Components/Cards/Cards"
import Students from "./Components/Students/Students"
import ReactEvents from "./Components/Events/ReactEvents"
import StudentsList from "./Components/Students/StudentsList"
import Parent from "./Components/Props/Parent"
import AllStudent from "./Components/PropsStudent/AllStudent"




const App = () => {
  return (
    <React.Fragment>

      {/* Static content */}
      {/* <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo facilis perferendis repellendus dicta vitae cupiditate voluptates molestias explicabo dolor, cum beatae itaque nemo ab reprehenderit incidunt neque recusandae. Voluptatem.</p> */}

      {/* Invoking the component */}
      {/* <Basic></Basic> */}
      {/* <ImageGallery /> */}
      {/* <ImageGallery2 /> */}
      {/* <Cards /> */}
      {/* <Students /> */}
      {/* <ReactEvents /> */}
      {/* <StudentsList/> */}
      {/* <Parent/> */}
      <AllStudent/>
    </React.Fragment>
  )
}
export default App