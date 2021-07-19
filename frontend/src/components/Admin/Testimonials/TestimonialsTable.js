import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TestimonialsTable.css";
import AdminUpdateTestimonials from "./AdminUpdateTestimonials";

export default function TestimonialsTable() {
  const [isPopUp, setPopUp] = useState(false);
  const [id, setId] = useState("");
  const [data, setData] = useState([
    {
      writer_name: "",
      Comment: "",
      _id: "",
    },
  ]);
  const handleDelete = async (_id) => {
    await axios.delete("/admin/deleteTestimonials/" + _id);
  };
  const popUp = (id) => {
    setPopUp(true);
    setId(id);
  };
  useEffect(() => {
    fetch("/admin/readTestimonials")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })

      .then((resJson) => setData(resJson))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="table">
        <table className="table-area">
          <thead>
            <tr className="table-raw">
              <th className="table-head">Writer's Name</th>
              <th className="table-head">Comment</th>
              <th className="table-head">Delete & Update</th>
            </tr>
          </thead>
          {data.map((data, index) => (
            <tbody key={data._id}>
              <tr className="table-raw">
                <td className="td">{data.writer_name}</td>
                <td className="td">{data.comment}</td>
                <td className="td">
                  <button
                    className="td del"
                    onClick={() => handleDelete(data._id)}
                  >
                    Del
                  </button>
                  <button
                    className="td upd"
                    onClick={() => {
                      console.log("clicked");
                      popUp(data._id);
                    }}
                  >
                    Upd
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <AdminUpdateTestimonials
        trigger={isPopUp}
        setTrigger={setPopUp}
        id={id}
      />
    </>
  );
}
