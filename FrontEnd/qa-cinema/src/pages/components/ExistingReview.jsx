const ExistingReview = ({ review }) => {
  return (
    <>
      {review.map((review) => (
        <div>
          <h2>Username : {review.userName}</h2>
          <h2>Comment : {review.comment}</h2>
          <h2>Rating : {review.rating}</h2>
        </div>
      ))}
    </>
  );
};

export default ExistingReview;
