import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditPostWindow from '../feed/postComponent/EditPostWindow';

describe('EditPostWindow', () => {
  it('updates the post content when changed and clicks "Save Changes"', () => {
    // Mock onEditPost function
    const onEditPost = jest.fn();

    // Mock post data
    const post = {
      post_id: 1,
      user_firstName: 'John',
      user_lastName: 'Doe',
      user_photo: 'profile.jpg',
      postBody: 'Initial post content',
      postPhoto: 'post.jpg',
    };

    // Render the EditPostWindow component
    const { getByTestId, getByText } = render(
      <EditPostWindow {...post} onEditPost={onEditPost} />
    );

    // Find the textarea element by data-testid
    const postContentTextarea = getByTestId('postContent');

    // Simulate changing the post content
    fireEvent.change(postContentTextarea, { target: { value: 'Updated post content' } });

    // Find the "Save Changes" button by text
    const saveChangesButton = getByText('Save Changes');

    // Simulate clicking the "Save Changes" button
    fireEvent.click(saveChangesButton);

    // Expect the onEditPost function to be called with the updated post content
    expect(onEditPost).toHaveBeenCalledWith(1, 'Updated post content', 'post.jpg');
  });
});
