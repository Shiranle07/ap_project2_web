import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreatePostWindow from '../feed/createPost/createPostWindow/CreatePostWindow';

describe('CreatePostWindow', () => {
  it('calls addNewPost when "Post" button is clicked with valid post content', () => {
    // Mock userData and postsList
    const userData = {
      FirstName: 'John',
      LastName: 'Doe',
      ProfilePhoto: 'profile.jpg',
    };
    const postsList = [];
    const setPostsList = jest.fn();

    // Render the CreatePostWindow component
    const { getByPlaceholderText, getByText } = render(
      <CreatePostWindow userData={userData} postsList={postsList} setPostsList={setPostsList} />
    );

    // Fill in post content
    fireEvent.change(getByPlaceholderText(/What's on your mind, John?/i), { target: { value: 'This is a test post' } });

    // Click "Post" button
    fireEvent.click(getByText('Post'));

    // Expect addNewPost to be called
    expect(setPostsList).toHaveBeenCalled();
  });
});
