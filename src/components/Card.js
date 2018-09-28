import React from 'react';
import styled from 'styled-components';
import { FaUser, FaClock } from 'react-icons/fa';

const CardContainer = styled.div`
  width: 100%;
  border: 1px solid cadetblue;
  border-radius: 5px;
  background-color: #f2fff7;
  margin-bottom: 10px;
`;
const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9e5de;
  padding: 10px;
`;
const CardContent = styled.div`
  padding: 10px;
`;
const Avatar = styled(FaUser)`
  margin-right: 5px;
`;
const User = styled.div``;
const Timestamp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;
const Clock = styled(FaClock)`
  margin-right: 5px;
`;

const Card = ({ element }) => (
  <CardContainer>
    <CardTitle>
      <User>
        <Avatar />
        {element.user}
      </User>
      <Timestamp>
        <Clock />
        {element.timestamp} min ago
      </Timestamp>
    </CardTitle>
    <hr />
    <CardContent>{element.content}</CardContent>
  </CardContainer>
);
export default Card;
