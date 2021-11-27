import { NavLink } from "react-router-dom";

const NewPostPage = props => {

  const handleMessageChange = evt => {
    const {value} = evt.target;
    props.handleMessage(value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    props.handleSubmit();
  }

  return (
    <div className="NewPostPage">
      <NavLink to="/homeworks-router-crud/">Close</NavLink>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Пост, относящийся к курсу React" value={props.message} onChange={handleMessageChange}></textarea>
        <button type="submit">Опубликовать</button>
      </form>
    </div>
  )
}

export default NewPostPage;