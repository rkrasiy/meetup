import { useFetch } from "../util-hooks/useFetch";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage(props) {
  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {
          data.map( item => {
            let isFavorite = false;
            if(props.favorites.includes(item.id)) {
              isFavorite = true;
            }
            return <MeetupItem item={item} key={item.id} addClickHandler={props.addClickHandler} removeClickHandler={props.removeClickHandler} isFavorite={isFavorite}/>
          })
        }
      </ul>
    </section>
  );
}
