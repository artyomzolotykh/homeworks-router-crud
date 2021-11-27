import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewPostPage from './pages/NewPostPage';
import PostCardPage from './pages/PostCardPage';
import PostsPage from './pages/PostsPage';

function App() {
  
  const url = 'http://localhost:7777/posts/';

  const [listing, setListing] = useState([]);
  const [message, setMessage] = useState('');

  const reload = () => fetch(url)
    .then(response => response.json())
    .then(data => setListing(data))

  const handleSubmit = () => {
    const newItem = {
      "id": 0,
      "content": message
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        document.location.href = '/homeworks-router-crud/';
      })
  }

  const handleMessage = evt => {
    setMessage(evt);
  }

  const deletePost = id => {
    fetch(url + id, {
      method: 'DELETE'
    })
      .then(() => {
        document.location.href = '/homeworks-router-crud/';
      })
  }

  const changePostSubmit = (id, post) => {
    const changedItem = {
      "id": id,
      "content": post
    }

    console.log(changedItem);

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(changedItem),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        document.location.href = '/homeworks-router-crud/';
      })
  }

  useEffect(() => {
    reload();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/homeworks-router-crud/"
            exact
            element={<PostsPage listing={listing} />}
          />
          <Route
            path="/homeworks-router-crud/posts/new"
            exact
            element={
              <NewPostPage
                listing={listing}
                message={message}
                handleSubmit={handleSubmit}
                handleMessage={handleMessage}
              />}
            />
          <Route
            path="/homeworks-router-crud/posts/:id"
            exact
            element={listing.length ? 
              (<PostCardPage listing={listing} deletePost={deletePost} changePostSubmit={changePostSubmit} />) : 
              <p>Loading...</p>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;