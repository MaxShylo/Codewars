'use strict'

// https://www.codewars.com/kata/515bb423de843ea99400000a

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.numOfpages = Math.ceil(collection.length / itemsPerPage);
    this.items = collection.length;
    this.pages = this.fillPages(collection, itemsPerPage);
    this.perPage = itemsPerPage;
  }
  
  fillPages(collection, itemsPerPage) {
    let totalPages = [];
    
    for (let i = 0; i < this.numOfpages; i++) {
      totalPages.push([...collection.splice(0, itemsPerPage)]);
    }

    return totalPages;
  }

  itemCount() {
    return this.items;
  }
  pageCount() {
    return this.numOfpages;
  }
  pageItemCount(pageIndex) {
    const count = this.pages[pageIndex];
    return count ? count.length : -1;
  }
  pageIndex(itemIndex) {
    if (!this.items || itemIndex >= this.items) {
      return -1;
    }


    const onPage = Math.floor(itemIndex / this.perPage);


    return (onPage > this.numOfpages || itemIndex < 0) ? -1 : onPage;
  }
}
