import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TestimonialsTable.css";
export default function TestimonialsTable() {
  const [data, setData] = useState([
    {
      writer_name: "",
      Comment: "",
      id: "",
    },
  ]);
  const handleDelete = async (_id) => {
    await axios.delete("/admin/deleteTestimonials/" + _id);
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
  }, [data]);
  return (
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
          <tbody key={index}>
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
                <button className="td upd">Upd</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
