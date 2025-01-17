function handleClick(event) {
  console.log("Say Hello!");
  console.log(event);
}

function sayBye() {
  console.log("Say Bye!");
}

function handleDblClick(){
    console.log("You double clicked!")
}

export default function Button() {
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={sayBye}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus magni
        officia repudiandae numquam dolorum autem recusandae eos officiis
        cupiditate necessitatibus, pariatur, architecto aliquid nesciunt
        possimus ad praesentium suscipit provident molestiae.
      </p>
      <button onDoubleClick={handleDblClick}>double Click me!</button>
    </>
  );
}
