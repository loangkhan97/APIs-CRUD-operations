// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import ReadPosts from './components/ReadPosts';
import UpdatePost from './components/UpdatePost';
import DeletePost from './components/DeletePost';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
            <li>
              <Link to="/read">Read Posts</Link>
            </li>
            <li>
              <Link to="/update">Update Post</Link>
            </li>
            <li>
              <Link to="/delete">Delete Post</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create" element={<CreatePost />}></Route>
          <Route path="/read" element={<ReadPosts />}></Route>
          <Route path="/update" element={<UpdatePost />}></Route>
          <Route path="/delete" element={<DeletePost />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
