import {SvgSprite} from '../SvgSprite';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Weather forecast app</h1>
      <div className="header__items">
        <button className="add">
          <SvgSprite id={"plus"} className="search-block__icon"/>
          <span>Add city</span>
        </button>
        <div className="search-block">
          <div className="search-block__inner">
            <SvgSprite id={"search"} className="search-block__icon"/>
            <input type="search"
                   id="search"
                   placeholder="Search..."
                   className="search-block__input"
            />
          </div>
        </div>
      </div>
    </header>
  );
}