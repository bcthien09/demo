function emptyOrResult(data) {
    return data ?? [];
}

function getOffset(currentPage = 1, itemsPage) {
  return (currentPage - 1) * [itemsPage];
}
  
module.exports = {
  emptyOrResult,
  getOffset,
}
