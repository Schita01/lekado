
const VapeCard = ({title, text, salery, img}: any) => {
  return (
    <div className="card">
        <img src={img} alt="" />
      <svg>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <g id="_1421394342400">
            <g>
              <polygon
                fill="#343434"
                fillRule="nonzero"
                points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
              ></polygon>
              <polygon
                fill="#8C8C8C"
                fillRule="nonzero"
                points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"
              ></polygon>
              <polygon
                fill="#3C3C3B"
                fillRule="nonzero"
                points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
              ></polygon>
              <polygon
                fill="#8C8C8C"
                fillRule="nonzero"
                points="392.07,1277.38 392.07,956.52 -0,724.89"
              ></polygon>
              <polygon
                fill="#141414"
                fillRule="nonzero"
                points="392.07,882.29 784.13,650.54 392.07,472.33"
              ></polygon>
              <polygon
                fill="#393939"
                fillRule="nonzero"
                points="0,650.54 392.07,882.29 392.07,472.33"
              ></polygon>
            </g>
          </g>
        </g>
      </svg>
      <div className="textBox">
        <p className="text head">{title}</p>
        <span>{text}</span>
        <p className="text price">{salery}</p>
      </div>
    </div>
  );
};

export default VapeCard;
