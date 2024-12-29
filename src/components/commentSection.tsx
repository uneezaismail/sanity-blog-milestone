"use client";

import { useState } from "react";

export default function CommentsSection() {
  const [comments, setComments] = useState([
    { name: "Elon Musk", text: "Great read, as always! Looking forward to the next one." },
    { name: "Jeff Bezos", text: `Love the way you've explained everything so clearly. Thanks for this post!` },
  ]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() && name.trim()) {
      setComments([...comments, { name, text: newComment }]);
      setNewComment("");
      setName("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-slate-900 font-playfair mb-4">Comments</h2>
      <ul className="space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="bg-[#EAEAEA] text-[#333333] p-2 rounded">
            <p className="font-bold text-black">{comment.name}</p>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Your name"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-black  hover:bg-white hover:text-black hover:border-2 border-black text-white px-4 py-2 rounded"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
