import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../redux/actions/actions";

// ! comments reducer에 해당하는 component
const Fetch = () => {
  // commentList 빈배열
  // const commentList = useSelector((state) => state.comments.commentList);
  // ! 위와 같은 형태
  const { commentList } = useSelector((state) => state.comments);
  const { loading } = useSelector((state) => state.comments);
  const { error } = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    const getDatas = (fetchComments) => {
      // console.log(fetchComments(dispatch));
      if (loading) {
        // infinite scroll 필요
        fetchComments(dispatch);
      }

      // 임시
      fetchComments(dispatch);
    };
    getDatas(fetchComments());
  }, []);

  return (
    <div>
      <h2>Fetch</h2>
      <div
        className="comments"
        style={{
          border: "1px solid black",
        }}
      >
        {loading ? (
          <div>is Loading...</div>
        ) : (
          commentList.map((comment) => (
            <div key={comment.id} style={{ borderBottom: "1px solid black" }}>
              <h4>{comment.name}</h4>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Fetch;
