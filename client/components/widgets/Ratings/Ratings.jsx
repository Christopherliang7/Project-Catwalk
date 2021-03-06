import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import StartsBar from './startsBar.jsx';
import AverageStars from './averageStars.jsx';
import SizeComfort from './sizeComfort.jsx';
import Reviews from './reviews.jsx';
import AddReview from './addReview.jsx';
import getMeta from '../../../actions/RatingsOverview/getMeta.js';
import getReview from '../../../actions/RatingsOverview/getReviews.js';
import store from '../../../store/store.js';

const Rating = ({ showReviews, metaRatings }) => {
  // console.log('showReviews');
  // console.log(showReviews);
  const { productId } = useParams();
  const { characteristics } = metaRatings;
  const { recommended } = metaRatings;
  const sum = recommended[0] + recommended[1];
  const recommendPercentage = parseInt((recommended[1] / sum) * 100);
  const ratingsMeta = metaRatings.ratings;

  useEffect(() => {
    store.dispatch(getReview((productId)))
      .then(() => {
        store.dispatch(getMeta(productId));
      })
      .catch((err) => {
        console.log("Error! Error: ", err);
      });
  }, []);

  let starSum = 0;
  let ratingSum = 0;
  Object.values(ratingsMeta).map((value) => { ratingSum += value; });
  for (const i in ratingsMeta) {
    starSum += ratingsMeta[i] * parseInt(i);
  }
  const temp = (starSum / ratingSum).toFixed(2);
  const avarageStarsPercentage = `${(temp / 5) * 87}%`;

  return (
    <div className="row">
      <div className="column_one">
        <h3>RATING &amp; REVIEWS</h3>
        <div className="rating">
          {' '}
          {temp}
          {' '}
        </div>
        <div className="star-ratings-css">
          <AverageStars percentage={{ width: avarageStarsPercentage }} />
        </div>

        <div>
          <h5>
            {recommendPercentage}
            % of reviews recommend this product
          </h5>
        </div>

        <div className="starts-Bars">
          <StartsBar ratingsMeta={ratingsMeta} />
        </div>

        <div className="size-comfort">
          <SizeComfort characteristics={characteristics} />
        </div>

      </div>

      <div className="column_two">
        <div>
          <Reviews showReviews={showReviews} />
        </div>

        <div>

          <AddReview showReviews={showReviews} metaRatings={metaRatings} />
        </div>
      </div>

    </div>

  );
};

export default Rating;
