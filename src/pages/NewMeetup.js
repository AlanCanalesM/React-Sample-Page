import NewMeetUpForm from "../components/layout/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";


function NewMeetUp(){

    const navigate = useNavigate();


    function addMeetupHandler(meetupData){

        fetch(
            ' https://react-getting-started-c9e2f-default-rtdb.firebaseio.com/meetups.json'
            , {
                method: 'POST', 
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => { 

            navigate('/', {replace:true})
        });
    }

    return <section>
        <h1>Add new Meetup</h1>
        <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
    </section>
}


export default NewMeetUp;