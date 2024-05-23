import Webcam from "react-webcam";
import React, { useState, useRef, useCallback } from "react";

const ProductFormLayout = () => {
    const webcamRef = useRef(null);
  const [img, setImg] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    console.log("imageSrc", imageSrc)
  }, [webcamRef]);

  const videoConstraints = {
    width: 390,
    height: 390,
    facingMode: "user",
  };

    return (
        <>
            <div className="mt-20 px-6 pt-8 pb-4 lg:px-10">
            <div className="Container">
      {img === null ? (
        <>
          <Webcam
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            audio={false}
            height={500}
            width={500}
            ref={webcamRef}
            mirrored={true}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <button onClick={() => setImg(null)}>Recapture</button>
        </>
      )}
    </div>
            </div>
        </>
    )
}

export default ProductFormLayout