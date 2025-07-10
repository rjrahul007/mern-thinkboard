import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'


const HomePage = () => {
    const [rateLimited, setRateLimited] = useState(false)
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    const fetchNotes = async ()=> {
      try {
        const res = await api.get("/notes")
        setNotes(res.data)
        setRateLimited(false)
        // console.log(res.data) 
      } catch (error) {
        console.log("Error fetching notes", error)
        if(error.res?.status ===429){
          setRateLimited(true)
        }else{
          toast.error("Failed to load notes")
        }
      }finally{
        setLoading(false)
      }
    }
    fetchNotes()
    }, [])
    

  return (
    <div className='max-h-screen'>
     <Navbar/>
     {rateLimited && <RateLimitedUI/>}
     <div className="max-w-7xl mx-auto p-4 mt-6">
      {loading && <div className='text-center text-primary py-10'> Loading notes...</div>}
     </div>
     {notes.length === 0 && !rateLimited && <NotesNotFound/>}
     {notes.length > 0 && !rateLimited && (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {notes.map(note=> (
        <NoteCard key={note.title} {...note} setNotes={setNotes}/>
        ))}
      </div>
     )}
    </div>
  )
}

export default HomePage
