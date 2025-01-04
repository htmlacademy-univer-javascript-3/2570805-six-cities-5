import {editFavoriteStatusAction} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {AppRoute, AuthorizationStatus} from '../../consts/consts.ts';
import {useNavigate} from 'react-router-dom';

type BookmarkButtonProps = {
  id: string;
  isFavorite: boolean;
  className: string;
  width: number;
  height: number
}

export function BookmarkButton({id, isFavorite, className, width, height}: BookmarkButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleBookmarkClick() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(editFavoriteStatusAction({offerId: id, markFavorite: !isFavorite}));
  }

  return (
    <button
      className={`${className}__bookmark-button ${isFavorite ? className + '__bookmark-button--active' : ''} button`}
      type="button"
      onClick={handleBookmarkClick}
    >
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In' : 'To'}To bookmarks</span>
    </button>
  );
}
