import React, { useContext } from "react";
import { Context } from "../Context";
import Cards from "../components/Cards";

const Browse = () => {
  const { videos } = useContext(Context);

  const renderVideo = videos?.map((item, id) =>
    <Cards item={item} key={id} />
  );

  console.log(videos);
  return (
    <div className="container-fluid">
      <h1>Browse Content</h1>
      <div className="container">{renderVideo}</div>
    </div>
  );
};

export default Browse;
