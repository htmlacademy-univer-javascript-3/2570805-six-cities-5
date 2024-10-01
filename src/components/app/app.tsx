import Catalog from '../../pages/catalog/catalog.tsx';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <Catalog placesCount={placesCount}/>
  );
}

export default App;
