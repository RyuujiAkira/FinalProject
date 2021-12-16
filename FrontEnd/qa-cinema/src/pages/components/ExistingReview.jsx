const ExistingReview = ({ review }) => {
  return (
    <>
      {review.map((review) => (
        <>
        <div>
          <h4>Username : {review.userName}</h4>
          <h4>Comment : {review.comment}</h4>
          <h4>Rating : {review.rating}</h4>
        </div>
          <hr />
        </>
      ))}
    </>
  );
};

export default ExistingReview;
