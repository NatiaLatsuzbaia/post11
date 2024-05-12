import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  

  return (
    <React.Fragment>
      <div className="row justify-content-center mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <ReactQuill
                value={newComment}
                onChange={(value) => setNewComment(value)}
                modules={quillModules}
                formats={quillFormats}
              />
            </div>
            <div className="card-footer">
              <button onClick={handleAddComment} className="btn btn-primary">
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Display comments below the Add Comment section */}
      <div className="row justify-content-center mt-4">
        <div className="col-12">
          <div className="card">
            <ul>
              {
                comments.map((comment) => (
                  <li key={comment.id}>
                    <span dangerouslySetInnerHTML={{__html:comment.comment}}></span>
                    <button
                      onClick={() => handleDeleteComment(comment.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comments;

const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['link', 'image'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['clean'],
  ],
};

const quillFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'link', 'image',
  'list', 'bullet',
  'align',
  'clean',
];
