function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form was Submittted!");
}

export default function Form() {
  return (
    <form action="/" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="werite something" />
      <button>Submit!</button>
    </form>
  );
}
