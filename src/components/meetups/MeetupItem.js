import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { addToFavorites, removeFromFavorites } from "../../features/counter/counterSlice";
import { useDispatch } from 'react-redux'

export default function MeetupItem(props) {
  const { item, isFavorite } = props;
  const dispatch = useDispatch()

  function clickHandlerAdd(){
    if(!isFavorite){
      dispatch(addToFavorites( {id: item.id}))
    }else if(isFavorite){
      dispatch(removeFromFavorites( {id: item.id}))
    }
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={clickHandlerAdd}>
            {
              !isFavorite  ? 'Add to favorites' : 'Remove from favorites'
            }
          </button>
        </div>
      </Card>
    </li>
  );
}
