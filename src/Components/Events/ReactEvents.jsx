const ReactEvents = () => {
    let fun = () => {
        console.log("Wlcome JS")
    }

    let printName = (fname) => {
        console.log(`My name is ${fname}`)
    }


    let otp = () => {
        console.log(Math.floor(Math.random() * 9000 + 1000));
    }

    // or

    //Directly in tag


    return (
        <>
            <div className="events">
                <h1>Events</h1>
                <button onClick={fun}>
                    Click Here
                </button>

                <h1>Print Name 1</h1>
                <button onClick={() => printName("Manu")} >
                    click here
                </button>

                <h1>Print Name 2</h1>
                <button onClick={() => printName("Gowda")} >
                    click here
                </button>

                <h2>Generate otp</h2>
                <button onClick={otp}>
                    click here
                </button>

                <h1>OR</h1>


                <h2>Generate otp</h2>
                <button onClick={() => alert(Math.floor(Math.random() * 9000 + 1000))}>
                    click here
                </button>

            </div>
        </>
    )
}

export default ReactEvents
