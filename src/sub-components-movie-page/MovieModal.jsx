import React from "react";
import "./moviemodal.css";
export default function MovieModal(props) {
  const { modalstate,movieTrailer, setModalState } = props;
  return (
    <div className={modalstate ? "active" : "disabled"}>
      <button
        className="closebutton"
        onClick={() => {
          setModalState(false);
        }}
      >
        Close Trailer
      </button>
      {/* Only mount the YouTube iframe while the modal is open, so the
          player isn't downloaded until the user actually asks for it
          (this also stops playback when the modal is closed). */}
      {modalstate && (
        <iframe
          className="trailer"
          src={movieTrailer}
          title="YouTube video player"
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
