function handleClick(){
    console.log("Hello!")
}

function handleMouseOver(){
    console.log("Bye!")
}

function handleDblClick(){
    console.log("you double Clicked me!");
}

export default function Button(){
    return(
        <>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti saepe vel laborum voluptas.
                Voluptas magni fugit excepturi a fuga, illo, illum quis recusandae pariatur esse quod quisquam 
                laudantium cum laborum?
            </p>
            <button onDoubleClick={handleDblClick}>double click me!</button>
        </>
    )
}