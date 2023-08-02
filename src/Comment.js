import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.commentContent}</p>
      {comment.replies &&
        comment.replies.map((reply) => (
          <Comment key={reply.commentId} comment={reply} />
        ))}
    </div>
  );
};

const CommentSection = ({ comments }) => {
  const totalComments = (comment) => {
    let total = 1; // Count the main comment itself

    if (comment.replies) {
      // If there are replies, recursively count them
      comment.replies.forEach((reply) => {
        total += totalComments(reply);
      });
    }

    return total;
  };

  const total = comments.reduce(
    (sum, comment) => sum + totalComments(comment),
    0
  );

  return (
    <div className="comment-section">
      <h1>Total Komentar: {total}</h1>
      {comments.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
    </div>
  );
};

const App = () => {
  const commentsData = [
    {
      commentId: 1,
      commentContent: 'Hai',
      replies: [
        {
          commentId: 11,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 111,
              commentContent: 'Haai juga hai jugaa',
            },
            {
              commentId: 112,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
        {
          commentId: 12,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 121,
              commentContent: 'Haai juga hai jugaa',
            },
          ],
        },
      ],
    },
    {
      commentId: 2,
      commentContent: 'Halooo',
    },
  ];

  return <CommentSection comments={commentsData} />;
};

export default App;
