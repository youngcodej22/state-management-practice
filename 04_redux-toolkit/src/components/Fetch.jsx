import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { commentsActions } from "../redux/reducer/comments/reducer";

const Fetch = () => {
  const { commentList } = useSelector(
    (state) => state.persistedReducer.comments
  );
  const { loading } = useSelector((state) => state.persistedReducer.comments);
  // const { error } = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  const fetchComments = () => (dispatch) => {
    dispatch(commentsActions.fetchCommentsRequest());
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => dispatch(commentsActions.fetchCommentsSuccess(data)))
      .catch((error) => dispatch(commentsActions.fetchCommentsFailure(error)));
  };
  // ({data})

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
