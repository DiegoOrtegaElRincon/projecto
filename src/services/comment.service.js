import db from "../Firebase";
import { ref, get, remove, push, update } from "firebase/database";

const dbRef = ref(db, "/comments");

const getAllComments = () => {
  return get(dbRef);
};

const addComment = (nickname, comment) => {
  return push(dbRef, {
    nickname: nickname,
    comment: comment
  });
};

const removeComment = (key) => {
  const dbRefComment = ref(db, `/comments/${key}`);
  return remove(dbRefComment);
};

const returnComment = (key) => {
  const dbRefComment = ref(db, `/comments/${key}`);
  return get(dbRefComment);
};

const updateComment = (key, nickname, comment) => {
  const dbRefComment = ref(db, `/comments/${key}`);
  return update(dbRefComment, {
    nickname: nickname,
    comment: comment
  })
};

export default {
  getAllComments,
  addComment,
  removeComment,
  returnComment,
  updateComment
};