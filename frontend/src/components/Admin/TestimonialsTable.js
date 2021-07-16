import React, { useEffect, useState } from "react";
import "./TestimonialsTable.css";
export default function TestimonialsTable() {
  const [data, setData] = useState([
    {
      writer_name: "",
      Comment: "",
      _id: "",
    },
  ]);
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
        <tr className="table-raw">
          <th className="table-head">Writer's Name</th>
          <th className="table-head">Comment</th>
          <th className="table-head">Delete & Update</th>
        </tr>
        {data.map((data, index) => (
          <tbody key={data._id}>
            <tr className="table-raw">
              <td className="td">{data.writer_name}</td>
              <td className="td">{data.comment}</td>
              <td className="td">
                <button className="td">Del</button>
                <button className="td">Upd</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
