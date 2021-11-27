import moment from 'moment';
import { NavLink } from 'react-router-dom';

const Card = ({item}) => {

  return (
    <NavLink className="Card" to={`/homeworks-router-crud/posts/${item.id}`}>
      <div className="card_created">Добавлено: {moment(item.created).fromNow()}</div>
      <div className="card_content">{item.content}</div>
    </NavLink>
  )
}

export default Card;