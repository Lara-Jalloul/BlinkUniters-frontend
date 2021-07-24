import React, { useState } from "react";
import "./UpdateTestimonials.css";
import axios from "axios";
function AdminUpdateTestimonials(props) {
  let id = props.id;
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const [update, setUpdate] = useState([
    {
      writer_name: "",
      Comment: "",
      _id: "",
    },
  ]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const testimonials = {
      writer_name: update.writer_name,
      comment: update.comment,
      _id: props.id,
    };
    try {
      await axios
        .put("/admin/updateTestimonials/" + props.id, testimonials)
        .then((res) => {
          if (res) {
            setMessage("testimonial has been updated");
            setUpdate("");
            setTimeout(() => {
              setMessage("");
            }, 5000);
          }
        });
    } catch (error) {
      console.log("error: ", error);
      if (error.response) {
        setError(error.response.data.error);
        setUpdate("");
        setTimeout(() => {
          setError("");
        }, 10000);
      }
    }
  };

  return props.trigger ? (
    <div className="popUp">
      <form className="update-form">
        <input
          onChange={handleChange}
          type="text"
          name="writer_name"
          className="update-writer"
          value={update.writer_name}
        />
        <textarea
          onChange={handleChange}
          name="comment"
          className="update-textarea"
          value={update.comment}
        ></textarea>
        <button type="submit" onClick={handleUpdate}>
          update
        </button>
      </form>
      <button
        onClick={() => {
          props.setTrigger(false);
        }}
        className="done"
      >
        Done
      </button>
      {error && <span style={{ color: "red" }}>{error}</span>}
      {message && <span style={{ color: "red" }}>{message}</span>}
    </div>
  ) : (
    ""
  );
}

export default AdminUpdateTestimonials;
