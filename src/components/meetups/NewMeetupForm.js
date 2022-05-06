import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

import { v4 as uuid } from 'uuid';
import { addItem } from "../../store/carts-slice";
import { useDispatch } from 'react-redux';

export default function NewMeetupForm() {
  const dispatch = useDispatch();
  const refTitle = useRef('');
  const refImage = useRef('');
  const refAddress = useRef('');
  const refDescription = useRef('');
  
  async function submitHandler(event) {
    event.preventDefault();

    const item = {
      id:  uuid(),
      title: refTitle.current.value,
      image: refImage.current.value,
      address: refAddress.current.value,
      description: refDescription.current.value,
    }
    
    dispatch(addItem({item: item}))
    refTitle.current.value = ""
    refImage.current.value = ""
    refAddress.current.value = ""
    refDescription.current.value = ""
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
