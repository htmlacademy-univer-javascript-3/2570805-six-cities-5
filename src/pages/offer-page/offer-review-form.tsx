import React, {ChangeEvent, FormEvent, useState} from 'react';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../consts/consts.ts';
import {sendReviewAction} from '../../store/api-actions.ts';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {toast} from 'react-toastify';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getReviewSendingStatus} from '../../store/offers-data/selectors.ts';

const RATING: [number, string][] = [
  [5, 'perfect'],
  [4, 'good'],
  [3, 'not bad'],
  [2, 'badly'],
  [1, 'terribly'],
];

export function OfferReviewForm() {
  const {id: offerId} = useParams<string>();
  const [formData, setFormData] = useState<{rating: number | null; review: string}>({rating: null, review: ''});
  const isValid = formData.rating !== null && formData.review.length >= MIN_REVIEW_LENGTH && formData.review.length <= MAX_REVIEW_LENGTH;
  const dispatch = useAppDispatch();
  const isReviewSending = useAppSelector(getReviewSendingStatus);

  function handleRatingChange(evt: ChangeEvent<HTMLInputElement>) {
    const {name, value} = evt.currentTarget;
    setFormData({...formData, [name]: Number(value)});
  }

  function handleReviewChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    const {name, value} = evt.currentTarget;
    setFormData({...formData, [name]: value});
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (offerId && formData.rating) {
      try {
        dispatch(sendReviewAction({offerId, comment: formData.review, rating: formData.rating}))
          .then(() => setFormData({rating: null, review: ''}));
      } catch {
        toast.warn('Failed to send review');
      }
    }
  }

  return (
    <form className="reviews__form form" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING.map(([value, title]) => (
          <React.Fragment key={`${value}-stars`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              disabled={isReviewSending}
              onChange={handleRatingChange}
              checked={formData.rating === value}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isReviewSending}
        onChange={handleReviewChange}
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
        with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid || isReviewSending}>Submit</button>
      </div>
    </form>
  );
}
