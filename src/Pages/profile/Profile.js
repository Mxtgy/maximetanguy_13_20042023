import { Navigate } from 'react-router-dom';
import Accounts from '../../Components/Accounts/Accounts';
import styles from './Profile.module.css';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from '../../Utils/apiClient.js';
import { editUser } from '../../redux.js';

/*
This is the component for the profile page.
*/
function Profile() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [checkError, setCheckError] = useState(false);
    const [openForm, setOpenForm] = useState(false); 

    /*
    Send the form to change the user's firstname and/or lastname.
    Initiate the fetch call to send the data to the back and
    also store the changes in redux.
    */
    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const firstName = form.querySelector('#firstName').value;
        const lastName = form.querySelector('#lastName').value;
        if (firstName.length > 1 && lastName.length > 1) {
            const update = await updateUser(user.token, firstName, lastName);
            if (!update || update.status === "400" || update.status === "500") return setCheckError(true);
            dispatch(editUser(update.body));
            setOpenForm(!openForm);
        }
    }

    return (
        <>
            { user.userId ?
            <main className={ styles.main + ' ' + styles.bg_dark }>
                <div className={ styles.header }>

                    { !openForm &&
                        <div>
                            <h1>Welcome back<br />{user.firstName} {user.lastName} !</h1>
                            <button onClick={() => setOpenForm(!openForm)} className={ styles.edit_button }>Edit Name</button>
                        </div>
                    }

                    { openForm &&
                        <form onSubmit={handleSubmit}>
                            <h1>Welcome back</h1>
                            { checkError && <p className={ styles.error }>Service indisponible, veuillez réessayer ultérieurement.</p> }
                            <div className={ styles.input_wrapper }>
                                <input type="text" id="firstName" placeholder={user.firstName} />
                                <input type="text" id="lastName" placeholder={user.lastName} />
                            </div>
                            <button type="submit" className={ styles.form_button }>Save</button>
                            <button type="button" onClick={() => setOpenForm(!openForm)} className={ styles.form_button }>Cancel</button>
                        </form>
                    }
                </div>
                <Accounts />
            </main> :
            <Navigate to='/' /> }
        </>
    );
}

export default Profile;