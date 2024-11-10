import React, {ChangeEvent, FormEvent, useState} from 'react';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../consts.ts';

const RATING: {[key: number]: string} = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

export function OfferReviewForm() {
  const [formData, setFormData] = useState<{rating: number | null; review: string}>({'rating': null, 'review': ''});
  const isValid = formData.rating !== null && formData.review.length >= MIN_REVIEW_LENGTH && formData.review.length <= MAX_REVIEW_LENGTH;

  function handleReviewChange(evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    const {name, value} = evt.currentTarget;
    setFormData({...formData, [name]: value});
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formData);
  }

  return (
    <form className="reviews__htmlForm htmlForm" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label htmlForm__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-htmlForm htmlForm__rating">
        {Object.entries(RATING).map(([value, title]) => (
          <React.Fragment key={`${value}-stars`}>
            <input
              className="htmlForm__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleReviewChange}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label htmlForm__rating-label" title={title}>
              <svg className="htmlForm__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea htmlForm__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleReviewChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
        with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit htmlForm__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}
