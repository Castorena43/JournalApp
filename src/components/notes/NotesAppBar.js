import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveNotes, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

  const dispatch = useDispatch();
  const { active } = useSelector( state => state.notes );

  const handleSaved = () => {
    dispatch( saveNotes( active ) )
  }

  const handlePictureUpload = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = ({target}) => {
    const file = target.files[0];
    if (file) {
      dispatch( startUploading(file) )
    }
    
  }

  return (
    <div className='notes__appbar'>
      <span>28 de agosto 2040</span>
      <input 
        id='fileSelector'
        type='file' 
        style={{ display: 'none' }} 
        onChange={ handleFileChange } 
      />
      <div>
        <button className='btn' onClick={ handlePictureUpload }>
          Picture
        </button>
        <button className='btn' onClick={ handleSaved }>
          Save
        </button>
      </div>
    </div>  
  )
}
