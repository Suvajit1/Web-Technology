function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form was submittted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit} action="/">
      <input type="text" placeholder="Write something" />
    </form>
  );
}
