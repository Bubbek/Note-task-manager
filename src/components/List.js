import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'

export default function List({selectedNote, setSelectedNote, notes}) {
  const [listStatus, setListStatus] = useState(false)
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }

  useEffect(() => {
    if (notes.length === 0) return setListStatus(true)
    return setListStatus(false)
  }, [notes])

  return (
    <ListGroup as="ul">
      {notes.map((note, index) => (
        <ListGroup.Item
          active={selectedNote ? note.id === selectedNote.id : false}
          onClick={() => onSelectNote(note)}
          as="li"
        >
          {note.title}
        </ListGroup.Item>
      ))}
      {listStatus && <Alert variant="danger">No Note Available</Alert>}
    </ListGroup>
  )
}
