import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";
import { cleanNotes } from "./notes";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch( startLoading() )
    firebase.auth().signInWithEmailAndPassword( email, password )
      .then( ({user}) => {
        dispatch(
          login(user.uid, user.displayName)
        )
        dispatch( finishLoading() )
      })
      .catch(e => {
        dispatch( finishLoading() )
        Swal.fire('Error', e.message, 'error')
      })
  }
}

export const startRegisterWithEmalPassword = (email, password, name) => {
  return ( dispatch ) => {
    firebase.auth().createUserWithEmailAndPassword( email, password )
      .then( async ({ user }) => {
        await user.updateProfile({ displayName: name})
        // console.log(user)
        dispatch(
          login( user.uid, user.displayName)
        )
      })
      .catch( e => {
        Swal.fire('Error', e.message, 'error')
      })
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup( googleAuthProvider )
      .then( ({ user }) => {
        dispatch(
          login( user.uid, user.displayName)
        )
      })
  }
}

export const login = (uid, name) => ({
  type: types.login,
  payload: {
    uid,
    name
  }
})

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch( logout() )
    dispatch( cleanNotes() )
  }
}

export const logout = () => ({
  type: types.logout
})