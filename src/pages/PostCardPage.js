import { useParams } from "react-router-dom";
import { useState } from "react";
import moment from "moment";

const PostCardPage = (props) => {

  const actualParams = useParams();
  const actualItem = props.listing.filter(item => Number(item.id) === Number(actualParams.id));
  const [isEditedMode, setEditedMode] = useState(false);

  console.log(actualItem);

  const changePost = () => {
    setEditedMode(true);
  }

  const deletePost = id => {
    props.deletePost(id);
  }

  const changePostSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    const newPost = evt.target[0].value;
    console.log(newPost);
    props.changePostSubmit(actualItem[0].id, newPost);
  }

  const Editing = () => {
    return (
      <form onSubmit={changePostSubmit}>
        <textarea defaultValue={actualItem[0].content} />
        <input type="submit" />
      </form>
    )
  }

  const Staged = () => {
    return (
      <>
        <div className="PostCardPage_created">Добавлено: {moment(actualItem[0].created).fromNow()}</div>
        <div className="PostCardPage_content">{actualItem[0].content}</div>
        <div className="PostCardPage_buttons">
          <button className="blue-button" onClick={changePost}>Изменить</button>
          <button className="red-button" onClick={() => deletePost(actualItem[0].id)}>Удалить</button>
        </div>
      </>
    )
  }

  return (
    <div className="PostCardPage">
      {isEditedMode ? <Editing/> : <Staged/>}
    </div>
  )
}

export default PostCardPage;