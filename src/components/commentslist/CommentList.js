import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import CommentService from "../../services/comment.service";
import "./CommentList.css";

function CommentList() {
  const [comments, setComments] = useState([]);
  const refForm = useRef();

  const getAllComments = () => {
    CommentService.getAllComments()
      .then((items) => {
        let allComments = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allComments.push({
            key: key,
            nickname: data.nickname,
            comment: data.comment
          });
        });
        setComments([...allComments]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const removeComment = (key) => {
    CommentService.removeComment(key).then((res) => {
      getAllComments();
    });
  }

  const putComment = (key) => {
    const form = document.getElementById('update-form')
    CommentService.returnComment(key).then((data) => {
      form.nickname.value = data.val().nickname
      form.comment.value = data.val().comment
      form.key.value = data.key
    })
  }

  const updateComment = (e) => {
    e.preventDefault()
    let key = e.target.key.value
    let nickname = e.target.nickname.value
    let comment = e.target.comment.value
    CommentService.updateComment(key, nickname, comment).then(() => {getAllComments()})
  }

  const addComment = (e) => {
    e.preventDefault();
    const nickname = e.target.nickname.value;
    const comment = e.target.comment.value;
    CommentService.addComment(nickname, comment).then((res) => {
      refForm.current.reset();
      setComments(oldValues => [...oldValues, { key: res.key, nickname, comment }])
    })
  }

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <>
      <div className="comment-list-main-container">
        <div className="comment-form-container">
          <form id="comment-form" className="forms" onSubmit={addComment} ref={refForm}>
            <input className="rounded-input" type="text" name="nickname" placeholder="nickname" />
            <input className="rounded-input" type="text" name="comment" placeholder="comment" />
            <input className="rounded-input" type="submit" value="Add Comment" />
          </form>
          <form id="update-form" className="forms" onSubmit={updateComment} ref={refForm}>
            <input className="rounded-input" type="text" name="nickname" placeholder="nickname" />
            <input className="rounded-input" type="text" name="comment" placeholder="comment" />
            <input className="rounded-input" type="submit" value="Update Comment" />
            <input id="key" hidden name="key"/>
          </form>
        </div>

        <div className="comment-list">
          {comments.map(b =>
            <div className="comment-item" key={b.key}>
              <p>{b.nickname} {b.comment}</p>
              <button className="update-comment" onClick={() => putComment(b.key)} />
              <FaRegTrashAlt className="delete-comment" onClick={() => removeComment(b.key)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CommentList;