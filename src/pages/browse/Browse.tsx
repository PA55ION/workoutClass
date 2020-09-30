import React, { useContext } from "react";
import { Context } from "../../Context";
import Cards from "../../components/cards/Cards";
import "./Browse.css"

const Browse = () => {
  const { videos } = useContext(Context);

  const renderVideo = videos?.map((item, id) =>
    <Cards item={item} key={id} />
  );

  console.log(videos);
  return (
    <div className="container-fluid">
      <h1 className="browse_header header">Browse Content</h1>
      <div className="container">{renderVideo}</div>
    </div>
  );
};

export default Browse;
