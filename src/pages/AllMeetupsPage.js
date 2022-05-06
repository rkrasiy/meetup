
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage(props) {
  const { data , favorites } = props
  if (!data) return <p>Loading...</p>;
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {
          data.map( item => {
            let isFavorite = false;
            if(favorites.includes(item.id)) {
              isFavorite = true;
            }
            return <MeetupItem item={item} key={item.id} isFavorite={isFavorite}/>
          })
        }
      </ul>
    </section>
  );
}
