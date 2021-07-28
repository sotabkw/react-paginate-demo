import React from "react"
import ReactPaginate from "react-paginate" //ライブラリの呼び出し

interface Props {
  userSize: number //ページ数を計算するために必要な全ユーザーの数
  handleSearchUser: () => void // ユーザーを検索する関数
  setCurrentPageNumber: (page: number) => void //ページネーションの番号をセットする関数
}

const ONE_PAGE_DISPLAY_USERS = 20
const LAST_DISPLAY_SIZE = 20
const AROUND_DISPLAY_PAGES = 1

const Pagination = (props: Props) => {
  const { userSize, handleSearchUser, setCurrentPageNumber } = props

  const handlePaginate = (selectedItem: { selected: number }) => {
    const page = selectedItem.selected + 1
    setCurrentPageNumber(page)
    // APIを叩きに行く処理
    handleSearchUser()
  }

  // ページ数の計算
  const calculatePageCount = () => {
    return Math.ceil(userSize / ONE_PAGE_DISPLAY_USERS)
  }

  // ページネーションを表示
  return (
    <div>
      <ReactPaginate
        pageCount={calculatePageCount()}
        marginPagesDisplayed={LAST_DISPLAY_SIZE}
        pageRangeDisplayed={AROUND_DISPLAY_PAGES}
        onPageChange={handlePaginate}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        activeLinkClassName="active"
        previousLinkClassName="previous-link"
        nextLinkClassName="next-link"
        previousLabel={"left"}
        breakLabel="..."
        nextLabel={"right"}
        disabledClassName="disabled-button"
      />
    </div>
  )
}

export default Pagination
