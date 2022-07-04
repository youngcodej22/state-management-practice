import React, { useEffect, useState } from "react";

// ! comments reducer에 해당하는 component
const Fetch = ({ loading }) => {
  const [commentList, setCommentList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        // ! 에러 발생 유도 fetch
        // const response = await fetch(
        //   "https://jsonp.typicode.com/comments"
        // );

        // ! 정상 동작
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        if (response.ok) {
          // setLoading(true);
          const datas = await response.json();
          setCommentList(datas);
          // setLoading(false);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchDatas();
  }, []);

  return (
    <>
      <h2>Fetch</h2>
      {error ? <div style={{ color: "red" }}>에러 발생</div> : ""}

      <div
        className="comments"
        style={{
          border: "1px solid black",
        }}
      >
        {loading ? (
          commentList.map((comment) => {
            return (
              <ul key={comment.id} style={{ borderBottom: "1px solid black" }}>
                <li>{comment.name}</li>
                <li>{comment.email}</li>
                <li>{comment.body}</li>
              </ul>
            );
          })
        ) : (
          <div>nothing</div>
        )}
      </div>
    </>
  );
};

export default Fetch;
