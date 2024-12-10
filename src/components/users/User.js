import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h2`
  margin: 0 0 10px 0;
  color: #1a1a1a;
`;

const UserInfo = styled.p`
  color: #666;
  margin: 5px 0;
`;

const User = ({ user }) => {
  return (
    <UserContainer>
      <UserName>{user.full_name || user.username}</UserName>
      <UserInfo>@{user.username}</UserInfo>
      <UserInfo>{user.posts} posts</UserInfo>
    </UserContainer>
  );
};

export default User;
