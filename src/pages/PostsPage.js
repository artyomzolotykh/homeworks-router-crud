import { NavLink } from "react-router-dom";
import Card from "../components/Card";

const PostsPage = ({listing}) => {
  return (
    <div className="PostsPage">
      <NavLink to="/homeworks-router-crud/posts/new" className="PostsPage_link">Создать пост</NavLink>
      {listing.map(item => <Card key={item.id} item={item} />)}
    </div>
  )
}

export default PostsPage;