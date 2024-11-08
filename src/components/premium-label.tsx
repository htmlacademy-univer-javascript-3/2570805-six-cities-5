type PremiumLabelProps = {
  isPremium: boolean;
}

export function PremiumLabel({isPremium}: PremiumLabelProps) {
  return (
    isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : null
  );
}
