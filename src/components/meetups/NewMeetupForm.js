import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef, useState, useEffect  } from "react";
import { useFetch } from "../../util-hooks/useFetch";


export default function NewMeetupForm() {
  const { data } = useFetch({
    url: "/data.json",
  });
  const [dummyData, setDummyData] = useState('')
  useEffect(()=>{
    fetchData();
  }, [])
  const refTitle = useRef('');
  const refImage = useRef('');
  const refAddress = useRef('');
  const refDescription = useRef('');
  
  async function submitHandler(event) {
    event.preventDefault();

    //check all form's camps
    const newMeetup = {

      title: refTitle.current.value,
      image: refImage.current.value,
      direction: refAddress.current.value,
      descrtipion: refDescription.current.value,
    }

    let newArr = [ ...data, newMeetup]
    console.log(newArr)
      fetchData(newArr)
  }

  function fetchData(json = null){
  if(!json) return
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(json)
    };
    fetch('/data.json', requestOptions)
        .then(response => response.json())
        .then(data => {
        console.log('Data; ', data)
          setDummyData(data)
        } );
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={refTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={refImage}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={refAddress} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={refDescription}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
