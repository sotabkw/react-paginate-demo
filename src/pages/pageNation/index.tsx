import React from "react"
import Pagination from "../../components/pageNation"

const Index: React.FC = () => {
  return (
    <div>
      <Pagination userSize={200} handleSearchUser={() => {}} setCurrentPageNumber={() => {}} />
    </div>
  )
}

export default Index
