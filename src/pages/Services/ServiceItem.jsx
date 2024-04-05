const ServiceItem = ({ cName, title, text, img1, img2, video, url }) => {
  return (
    <div className={cName}>
      <div className="service-text">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        {/* <button className="btn">
          <a href={url} target="_blank">
            More Info
          </a>
        </button> */}
      </div>
      {video ? (
        <iframe
          className="ytube-video"
          src={`https://www.youtube.com/embed/${video}&rel=0`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ) : (
        <div className="images">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
