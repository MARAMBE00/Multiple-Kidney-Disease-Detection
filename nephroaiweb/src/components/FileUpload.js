import React, { useState, useRef } from "react";
import UploadService from "./FileUploadService";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './FileUpload.css';
import "bootstrap/dist/css/bootstrap.min.css";
import IMG_S00 from "../images/upload.png"

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progressInfos, setProgressInfos] = useState({ val: [] });
  const [message, setMessage] = useState([]);
  const [convertError, setConvertError] = useState("");
  const [base64String, setBase64String] = useState(null);
  const progressInfosRef = useRef(null);

  const selectFiles = (event) => {
    setSelectedFiles(event.target.files);

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
        setBase64String(reader.result.split(",")[1]);
    };
    reader.onerror = error => {
        setConvertError(error.toString);
    };
    setProgressInfos({ val: [] });
    setMessage("");
  };

  const printDocument = async () => {
    const data = document.getElementsByClassName('table_nx')[0];

    await html2canvas(data)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png', 1.0);
        const pdf = new jsPDF();

        const imgProperties = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("Report.pdf");
      })
  }

  const fileUpload = (idx, file) => {
    let _progressInfos = [...progressInfosRef.current.val];
    if (convertError === "") {
      return UploadService(base64String, (event) => {
        _progressInfos[idx].percentage = Math.round(
            (100 * event.loaded) / event.total
        );
        setProgressInfos({val: _progressInfos});
        setMessage("");
        setMessage((prevMessage) => ([
            ...prevMessage,
            "Uploading & verifying file: " + file.name + ". This may take a few minutes."
        ]));
      })
      .then((response) => {
        const arrayResponse = JSON.parse(response.data.replace(/'/g, "\""));
        setMessage("");
        setMessage((prevMessage) => ([
            ...prevMessage,
          <div className='table_nx'>
            <table>
              <tr className='table_headers'>
                <th className='sample_tp'>Sample Type</th>
                <th className='sample_dn'>Disease Name</th>
                <th className='sample_pr'>Prediction Result</th>
                <th className='sample_dr'>Description</th>
              </tr>
              <tr className="table_data a1">
                <td>Computerized Tomography (CT)</td>
                <td>Renal Cell Carcinoma (Tumors)</td>
                <td> 
                  <p style={{ backgroundColor: arrayResponse[0] === 'Negative' ? 'green' : 'red' }} className='result_fce'>
                      {arrayResponse[0]} 
                  </p>
                </td>
                <td>
                  <p className="refText">Abnormal growths or Tumors in kidneys can be benign or cancerous. 
                    <a className="refText a" href="https://www.urologyhealth.org/urology-a-z/k/kidney-cancer"> Find out more.</a>
                  </p>
                </td>
              </tr>
              <tr className="table_data a2">
                <td>Computerized Tomography (CT)</td>
                <td>Nephrolithiasis (Stones)</td>
                <td className="tm_data">
                  <p style={{ backgroundColor: arrayResponse[1] === 'Negative' ? 'green' : 'red' }} className='result_fce'>
                      {arrayResponse[1]} 
                  </p>
                </td>
                <td>
                  <p className="refText">A kidney stone is a hard object that is made from chemicals in the urine.
                    <a className="refText a" href="https://www.urologyhealth.org/urology-a-z/k/kidney-stones"> Find out more.</a>
                  </p>
                </td>
              </tr>
              <tr className="table_data a3">
                <td>Computerized Tomography (CT)</td>
                <td>Renal Cysts</td>
                <td>
                  <p style={{ backgroundColor: arrayResponse[2] === 'Negative' ? 'green' : 'red' }} className='result_fce'>
                      {arrayResponse[2]} 
                  </p>
                </td>
                <td>
                  <p className="refText">Kidney cysts are round pouches of fluid that form on or in the kidneys.
                    <a className="refText a" href="https://www.kidney.org.uk/kidney-cystsp"> Find out more.</a>
                  </p>
                </td>
              </tr>
            </table>
          </div>
        ]));
          setMessage((prevMessage) => ([
            ...prevMessage,
            <p className="table_data a4">Please click 
              <button onClick={printDocument} className='pdf_button'>here</button>
              to download the report.
            </p>
        ]));
      })
      .catch((error) => {
        _progressInfos[idx].percentage = 0;
        setProgressInfos({val: _progressInfos});
        setMessage("");
        setMessage((prevMessage) => ([
            ...prevMessage,
            "Verification failed: " + JSON.stringify(error.response.data)
                .replaceAll('"', "")
        ]));
      });
    } else {
      setMessage("");
      setMessage((prevMessage) => ([
          ...prevMessage,
          "Verification failed: Invalid file format!",
      ]));
    } setMessage([]);
  };

    const uploadFiles = () => {
      const files = Array.from(selectedFiles);
      let _progressInfos = files.map(file => ({ percentage: 0, fileName: file.name }));
      progressInfosRef.current = {
        val: _progressInfos,
      }

      files.map((file, i) => fileUpload(i, file));
  };

  return (
    <div className="fileborder" id="uploadLink">
        <h1 className="heading">Submit Your CT Report</h1>
        <div className="uploader_section">

          <div className="my-3">
            <div className="col-dn">
              <img className="upld_img" src={IMG_S00} height='' width='' alt="" />
              <label className="btn-default-p-0">
                <input className="uploader_media" type="file" multiple onChange={selectFiles} />
              </label>
              <div className="col-4">
                <button
                  className="upload-btn"
                  disabled={!selectedFiles}
                  onClick={uploadFiles}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>

          <div className="div_instructions">
            <div className="upload-card a1">
              <div className="upload-card-header a1">Guidelines & Limitations</div>
                <ol className="list-group-item a1">
                  <li>CT scan image should be in a supported file format, such as <b>JPG</b>, <b>JPEG</b>, and <b>PNG</b>.</li>
                  <li>The image size range should be between <b>80KB</b> and <b>5MB</b>.</li>
                  <li>Do not refresh the page while the process is underway.</li>
                  <li>The result is provisional and shall not take any decision unless an advice from a medical professional.</li>
                  <li>There can be circumstances where the result can be inaccurate or mispredicted.</li>
                  <li>A CT report that does not related to kidneys can also be misclassified.</li>
                  <li>The report cannot be used as a proof or any other evidence for nephrological disease diagnosis.</li>
                  <li>The result may be inaccurate if the image quality is poor or compressed.</li>
                </ol>
              </div>
          </div>
        
        </div>
          

        {progressInfos && progressInfos.val.length > 0 &&
        progressInfos.val.map((progressInfo, index) => (
          <div className="mb-2" key={index}>
            <div className="progress">
              <div
                className="progress-bar progress-bar-info"
                role="progressbar"
                aria-valuenow={progressInfo.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progressInfo.percentage + "%" }}
              >
                  {progressInfo.percentage}%
              </div>
            </div>
          </div>
        ))}

        <div className="tm_dcv">
          {message.length > 0 && (
            <div className="alert alert-secondary" role="alert">
              {message.map((item, i) => {
                return <p key={i} className="key_message">{item}</p>;
              })}
            </div>
          )}
        </div>
    </div>
  );
};

export default FileUpload;