import React from 'react';

const SearchBar = ({onSearch, search, checkStock}) => {
    return (
        <div className="SearchProduct">
            <form>
                <div className="form-group">
                    <input
                        type="search" className="form-control mb-2" name="search__product"
                        id="search__product" placeholder="Search product..." autoComplete="off"
                        onChange={(e) => onSearch(e)} value={search}
                    />
                </div>
				<div className="form-check text-center mb-4">
					<input type="checkbox" className="form-check-input" id="stocked"
						id="search__product" placeholder="Search product..." autoComplete="off"
                        onChange={(e) => checkStock(e)}
					/>
					<label className="form-check-label">Only show products on stock</label>
				</div>
            </form>
        </div>
    )
}

export default SearchBar;