import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from '../feed/post/Post';

describe('Post', () => {
  it('renders post details and comments', () => {
    // Mock post data
    const post = {
      post_id: 1,
      user_firstName: 'John',
      user_lastName: 'Doe',
      user_photo: 'profile.jpg',
      postBody: 'This is a test post',
      postPhoto: 'post.jpg',
      likesNumber: 5,
      publication_date: '2024-02-17',
      comments: [
        {
          comment_id: '1#1',
          commenter_firstName: 'Alice',
          commenter_lastName: 'Smith',
          commenter_photo: 'commenter.jpg',
          commentBody: 'First comment',
        },
        {
          comment_id: '1#2',
          commenter_firstName: 'Bob',
          commenter_lastName: 'Johnson',
          commenter_photo: 'commenter.jpg',
          commentBody: 'Second comment',
        },
      ],
      isLiked: false,
    };

    // Mock userData
    const userData = {
      FirstName: 'Jane',
      LastName: 'Doe',
      ProfilePhoto: 'profile.jpg',
    };

    // Render the Post component
    const { getByText, getByTestId,  getByLabelText } = render(
      <Post
        {...post}
        userData={userData}
        addCommentToPost={() => {}}
        deleteCommentFromPost={() => {}}
        setIsLiked={() => {}}
        onDeletePost={() => {}}
        onEditPost={() => {}}
      />
    );

    // Ensure post details are rendered
    expect(getByText(`${post.user_firstName} ${post.user_lastName}'s post`)).toBeInTheDocument();
    expect(getByText(post.likesNumber.toString())).toBeInTheDocument();
    expect(getByText('First comment')).toBeInTheDocument();
    expect(getByText('Second comment')).toBeInTheDocument();

    // Ensure comment input is rendered
    const commentInput = getByLabelText('Write a comment');
    expect(commentInput).toBeInTheDocument();

    // Ensure add comment button is rendered
    const addButton = getByTestId('Send');
    expect(addButton).toBeInTheDocument();

    // Simulate typing a comment and clicking the add button
    fireEvent.change(commentInput, { target: { value: 'New comment' } });
    fireEvent.click(addButton);

    // Ensure the new comment is rendered
    expect(getByText('New comment')).toBeInTheDocument();
  }); 
});
  