import {memo, useState} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {OFFERS_SORTING_OPTIONS} from '../../consts/consts.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {SortingOption} from '../../types/sorting-option.ts';
import {OfferBase} from '../../types/offer.ts';
import {changeSortingOptionAction} from '../../store/options-process/options-process.ts';
import {getSortingOption} from '../../store/options-process/selectors.ts';

export const OffersSortingOptions = memo(function OffersSortingOptions(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectedSortingOption = useAppSelector(getSortingOption);
  const dispatch = useAppDispatch();

  function handleOnOpenClick() {
    setIsOpen(!isOpen);
  }

  function handleOnSortingOptionClick(sortingOption: SortingOption<OfferBase>) {
    dispatch(changeSortingOptionAction(sortingOption));
    setIsOpen(!isOpen);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleOnOpenClick}>
        {selectedSortingOption.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {OFFERS_SORTING_OPTIONS.map((option) => (
            <li
              key={option.name}
              className={`places__option ${option.name === selectedSortingOption.name ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleOnSortingOptionClick(option)}
            >
              {option.name}
            </li>))}
        </ul>
      )}
    </form>
  );
})
