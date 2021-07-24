import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminUpdateFAQ from "./AdminUpdateFAQ";

export default function AdminDelFAQ() {
  const [isPopUp, setPopUp] = useState(false);
  const [id, setId] = useState("");

  const [data, setData] = useState([
    {
      question: "",
      answer: "",
      _id: "",
    },
  ]);
  const popUp = (id) => {
    setPopUp(true);
    setId(id);
  };

  const handleDelete = async (_id) => {
    await axios.delete("/admin/deleteFAQ/" + _id);
  };
  useEffect(() => {
    fetch("/admin/readFAQ")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })

      .then((resJson) => setData(resJson))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
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
                <td className="td">{data.question}</td>
                <td className="td">{data.answer}</td>
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
      <AdminUpdateFAQ trigger={isPopUp} setTrigger={setPopUp} id={id} />
    </div>
  );
}
