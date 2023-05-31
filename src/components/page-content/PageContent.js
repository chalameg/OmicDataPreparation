import MainNavigation from '../main-navigation/MainNavigation';
import './PageContent.css';

function PageContent({ title, children }) {
  return (
    <>
    <MainNavigation/>
    <div className="content">
      <h1>{title}</h1>
      {children}
    </div>
    </>
  );
}

export default PageContent;