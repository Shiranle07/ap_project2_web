import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentCard from '../feed/post/CommentCard';

describe('CommentCard', () => {
  it('calls onDeleteComment with the correct comment_id when the "Delete comment" button is clicked', () => {
    // Mock comment data
    const comment = {
      comment_id: 1,
      commenter_firstName: 'Alice',
      commenter_lastName: 'Smith',
      commenter_photo: 'profile.jpg',
      commentBody: 'This is a comment',
    };

    // Mock onDeleteComment function
    const onDeleteCommentMock = jest.fn();

    // Render the CommentCard component
    const { getByText } = render(
      <CommentCard {...comment} onDeleteComment={onDeleteCommentMock} />
    );

    // Find and click the "Delete comment" button
    const deleteButton = getByText('Delete comment');
    fireEvent.click(deleteButton);

    // Ensure onDeleteComment is called with the correct comment_id
    expect(onDeleteCommentMock).toHaveBeenCalledWith(comment.comment_id);
  });
});
