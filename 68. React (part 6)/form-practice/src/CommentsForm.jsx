import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      let { name, value } = event.target;
      return {
        ...currData,
        [name]: value,
      };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      comment: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give your comments</h4>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />

        <br />
        <br />

        <label htmlFor="comment">Comment : </label>
        <textarea
          value={formData.comment}
          placeholder="add few remarks"
          onChange={handleInputChange}
          id="comment"
          name="comment"
        ></textarea>

        <br />
        <br />

        <label htmlFor="rating">Rating : </label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />

        <br />
        <br />

        <button>Add Comment</button>
      </form>
    </div>
  );
}
