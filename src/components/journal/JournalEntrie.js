import React from 'react'
import moment from 'moment'
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

export const JournalEntrie = ({id, title, body, url, date}) => {

  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleClick = () => {
    dispatch( activeNote(id, {title,body,url,date}) )
  }

  return (
    <div className='journal__entry pointer' onClick={ handleClick }>
      {
        url && <div className='journal__entry-picture' style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${url})`
        }}>
        </div>
      }
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>
          { title } 
        </p>
        <p className='journal__entry-content'>
          { body } 
        </p>
      </div>

      <div className='journal__entry-date-box'>
        <span>{ noteDate.format('dddd') }</span>
        <span>{ noteDate.format('Do') }</span>
      </div>
    </div>
  )
}
