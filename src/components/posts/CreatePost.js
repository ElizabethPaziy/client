import React, { useState } from "react";
import { createPost } from "../../api/posts";
import styled from "styled-components";
import { useAuth } from "../../hooks/UseAuth";
const CreatePostContainer = styled.form`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px;
  border: 2px solid #e1e1e1;
  border-radius: 8px;
  margin-bottom: 16px;
  resize: vertical;
  min-height: 120px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const PostButton = styled.button`
  background: black;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0052a3;
  }
`;
const CreatePostSection = styled.div`
  margin-bottom: 20px;
`;

const UserInfoBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-top: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;
const CreatePost = ({ username, onPostCreated }) => {
  const { credentials, currentUser } = useAuth();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await createPost(username, content, credentials);
      setContent("");
      onPostCreated();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <CreatePostSection>
      <CreatePostContainer onSubmit={handleSubmit}>
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          maxLength={140}
        />
        <PostButton type="submit">Post</PostButton>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </CreatePostContainer>
    </CreatePostSection>
  );
};

export default CreatePost;
