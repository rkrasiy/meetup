import { uiActions } from './ui-slice';
import { replaceItems } from './carts-slice';

export const fetchCartsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://my-meetup-eb7a5-default-rtdb.europe-west1.firebasedatabase.app/carts.json'); 

      if(!response.ok){
        throw new Error('Could not fetch cart data!');          
      }
      const data = await response.json();
      return data;
    }

    try{
      const json = await fetchData();
      dispatch(replaceItems({items: json}))
    }catch(e){
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Reciving cart data failed!'
        })
      );
        setTimeout( ()=>{dispatch(uiActions.toggle())}, 2000)
    }
  }
}

export const sendCartData = (carts) => {
  return async (dispatch) =>{
    dispatch(uiActions.showNotification({
          status: 'pending',
          title: 'Success!',
          message: 'Sending cart data!'
      })
    );
    setTimeout( ()=>{dispatch(uiActions.toggle())}, 2000)
    const sendRequest = async() => {
      const response = await fetch('https://my-meetup-eb7a5-default-rtdb.europe-west1.firebasedatabase.app/carts.json', { method: 'PUT', body: JSON.stringify(carts.items)});

      if(!response.ok){
        throw new Error('Sending cart data failed');          
      }
    };
    
    try{
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sending cart data successfully!'
        })
      );
      setTimeout( ()=>{dispatch(uiActions.toggle())}, 2000)
    }catch(e){
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
        })
      );
      setTimeout( ()=>{dispatch(uiActions.toggle())}, 2000)
    }
  }
}