import { useFetch } from "../util-hooks/useFetch";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage(props) {
  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {
          data.map( item => {
          if(props.favorites.includes(item.id))
            return <MeetupItem item={item} key={item.id} isFavorite={true}/>
          })
        }
      </ul>
    </section>
  );
}
