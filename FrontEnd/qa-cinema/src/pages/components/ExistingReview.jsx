const ExistingReview = ({ review }) => {
  // review.map((reviewed) => {
  //   if (reviewed.movie_id === "general") {
  //     return (
  //       <>
  //         <h2>Username : {review.userName}</h2>
  //         <h2>Comment : {review.comment}</h2>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h2>Username : {review.userName}</h2>
  //         <h2>Comment : {review.comment}</h2>
  //         <h2>Rating : {review.rating}</h2>
  //       </div>
  //     );
  //   }
  // });

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
  //   // <div>
  //   //   {review.map((review) => <div><h2>Username : {review.userName}</h2>
  //   //   <h2>Comment : {review.comment}</h2>
  //   //     <h2>Rating : {review.rating}</h2>
  //   //     <div/>
  //   //   )}
  //   //       </div>
  // );
};

export default ExistingReview;
