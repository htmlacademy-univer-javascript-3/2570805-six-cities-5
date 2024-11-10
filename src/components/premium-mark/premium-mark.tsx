type PremiumMarkProps = {
  isPremium: boolean;
  className: string;
}

export function PremiumMark({isPremium, className}: PremiumMarkProps) {
  return (
    isPremium ?
      <div className={`${className}__mark`}>
        <span>Premium</span>
      </div>
      : null
  );
}
