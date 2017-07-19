import React from 'react';
import './Landing.scss';


class Landing extends React.Component {

  componentDidMount() {
     const script = document.createElement("script");

     script.src = "static/cordially-landing.js";
     script.async = true;

     document.body.appendChild(script);
 }

  render() {
    return (
      <div>
        <div className="usual-nav" />
        <div className="preloader">
          <div className="gradient-wrapper">
            <div className="gradient-loader" />
          </div>
          <div className="half-screen" />
        </div>
        <div className="wrapper-content">
          <div className="shapes one">
            <svg className="shape triangle big" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30">
              <polygon fill="none" stroke-width="1px" stroke="#000000" stroke-linejoin="round" stroke-miterlimit={10} points="14.921,2.27 28.667,25.5 1.175,25.5 " />
            </svg>
            <div className="shape circle" />
            <div className="shape diamond" />
            {/* <svg class="shape waves" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30">
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,23.651 c1.092,0,1.55-0.52,2.241-1.308c0.828-0.941,1.861-2.11,4.101-2.07c0.043-0.002,0.087-0.003,0.13-0.003 c2.163,0,3.171,1.148,3.985,2.073c0.692,0.788,1.149,1.308,2.241,1.308c0.054,0,0.106,0.006,0.157,0.013 c0.051-0.007,0.104-0.013,0.157-0.013c1.093,0,1.55-0.52,2.241-1.308c0.828-0.941,1.86-2.11,4.101-2.07 c0.044-0.002,0.087-0.003,0.129-0.003c2.163,0,3.173,1.148,3.986,2.073c0.691,0.788,1.148,1.308,2.241,1.308"/>
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,16.684 c1.092,0,1.55-0.521,2.241-1.308c0.828-0.941,1.861-2.111,4.101-2.071c0.043,0,0.087-0.001,0.13-0.001 c2.163,0,3.171,1.148,3.985,2.072c0.692,0.788,1.149,1.308,2.241,1.308c0.054,0,0.106,0.005,0.157,0.012 c0.051-0.007,0.104-0.012,0.157-0.012c1.093,0,1.55-0.521,2.241-1.308c0.828-0.941,1.86-2.111,4.101-2.071 c0.044,0,0.087-0.001,0.129-0.001c2.163,0,3.173,1.148,3.986,2.072c0.691,0.788,1.148,1.308,2.241,1.308"/>
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,9.714 c1.092,0,1.55-0.519,2.241-1.307c0.828-0.941,1.861-2.111,4.101-2.071c0.043-0.001,0.087-0.001,0.13-0.001 c2.163,0,3.171,1.147,3.985,2.072c0.692,0.788,1.149,1.307,2.241,1.307c0.054,0,0.106,0.006,0.157,0.014 c0.051-0.007,0.104-0.014,0.157-0.014c1.093,0,1.55-0.519,2.241-1.307c0.828-0.941,1.86-2.111,4.101-2.071 c0.044-0.001,0.087-0.001,0.129-0.001c2.163,0,3.173,1.147,3.986,2.072c0.691,0.788,1.148,1.307,2.241,1.307"/>
               </svg> */}
            <svg className="shape waves" width="100%" height="100%" viewBox="0 0 800 600" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421'}}>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M804.947,283.363C804.621,283.363 804.305,283.191 804.135,282.887C797.412,270.83 789.164,262.64 789.081,262.558C788.715,262.199 788.712,261.611 789.071,261.246C789.431,260.881 790.019,260.877 790.383,261.236C790.467,261.319 798.897,269.683 805.756,281.982C806.006,282.43 805.845,282.995 805.398,283.245C805.255,283.325 805.1,283.363 804.947,283.363Z" style={{strokeWidth: '0.7px'}} />
              </g>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M786.239,263.881C783.875,263.881 781.823,262.93 780.304,261.131C779.727,260.448 779.13,259.602 778.5,258.707C777.789,257.699 777.052,256.656 776.335,255.84C774.935,254.249 773.569,253.361 773.555,253.352C773.259,253.162 773.096,252.82 773.134,252.47C773.172,252.12 773.405,251.822 773.735,251.7C773.798,251.677 775.297,251.134 777.411,251.134C779.766,251.134 783.183,251.817 786.09,255.074C787.002,256.095 787.924,257.307 788.833,258.677C789.956,260.37 790.675,261.664 790.706,261.718C790.83,261.941 790.856,262.204 790.779,262.448C790.703,262.69 790.53,262.891 790.3,263.003C790.227,263.038 788.47,263.881 786.239,263.881ZM776.183,253.061C776.654,253.48 777.187,253.999 777.728,254.614C778.512,255.505 779.277,256.589 780.016,257.638C780.624,258.498 781.197,259.312 781.722,259.933C782.894,261.321 784.414,262.025 786.239,262.025C787.143,262.025 787.952,261.854 788.536,261.682C788.225,261.166 787.797,260.474 787.286,259.703C786.425,258.406 785.558,257.265 784.706,256.31C782.256,253.566 779.386,252.99 777.411,252.99C776.965,252.99 776.552,253.018 776.183,253.061Z" style={{strokeWidth: '0.7px'}} />
              </g>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M789.894,263.097C789.837,263.097 789.779,263.091 789.721,263.08C789.471,263.033 789.251,262.884 789.113,262.67C789.08,262.618 788.281,261.371 787.321,259.582C786.545,258.137 785.913,256.751 785.443,255.461C782.739,248.035 788.259,243.03 788.316,242.98C788.578,242.746 788.953,242.684 789.278,242.814C789.604,242.946 789.829,243.251 789.856,243.602C789.858,243.619 789.994,245.242 790.734,247.228C791.113,248.246 791.683,249.388 792.235,250.491C792.725,251.471 793.188,252.397 793.517,253.229C795.337,257.826 792.297,261.578 790.437,262.921C790.278,263.036 790.088,263.097 789.894,263.097ZM788.354,245.766C787.151,247.48 785.675,250.675 787.187,254.826C787.627,256.032 788.222,257.337 788.956,258.704C789.394,259.521 789.802,260.227 790.111,260.745C791.237,259.615 793.07,257.142 791.791,253.912C791.492,253.155 791.047,252.264 790.575,251.321C790.002,250.174 789.408,248.988 788.994,247.875C788.707,247.103 788.501,246.382 788.354,245.766Z" style={{strokeWidth: '0.7px'}} />
              </g>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M778.618,253.004C778.185,253.004 777.797,252.7 777.709,252.26C777.404,250.745 778.091,249.011 778.804,247.515C779.215,246.653 778.975,245.649 778.973,245.64C778.851,245.144 779.151,244.64 779.645,244.515C780.141,244.392 780.643,244.684 780.771,245.178C780.814,245.346 781.175,246.855 780.48,248.313C780.129,249.051 779.304,250.781 779.529,251.892C779.63,252.395 779.304,252.885 778.802,252.986C778.74,252.998 778.678,253.004 778.618,253.004Z" style={{strokeWidth: '0.7px'}} />
              </g>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M786.336,248.388C786.128,248.388 785.918,248.318 785.744,248.174C784.872,247.451 782.958,247.359 782.141,247.32C780.528,247.243 779.369,246.21 779.242,246.093C778.866,245.744 778.843,245.157 779.192,244.781C779.54,244.405 780.129,244.383 780.504,244.73C780.506,244.734 781.277,245.42 782.23,245.466C783.886,245.545 785.74,245.759 786.929,246.745C787.324,247.073 787.379,247.658 787.051,248.052C786.868,248.274 786.603,248.388 786.336,248.388Z" style={{strokeWidth: '0.7px'}} />
              </g>
            </svg>
            <svg className="shape hexa" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" >
              <polygon fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit={10} points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 " />
            </svg>
            <svg className="shape triangle small" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" >
              <polygon fill="none" stroke-width="1px" stroke="#000000" stroke-linejoin="round" stroke-miterlimit={10} points="14.921,2.27 28.667,25.5 1.175,25.5 " />
            </svg>
            <div className="shape circle small" />
            {/* <svg class="shape waves small" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" >
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,23.651 c1.092,0,1.55-0.52,2.241-1.308c0.828-0.941,1.861-2.11,4.101-2.07c0.043-0.002,0.087-0.003,0.13-0.003 c2.163,0,3.171,1.148,3.985,2.073c0.692,0.788,1.149,1.308,2.241,1.308c0.054,0,0.106,0.006,0.157,0.013 c0.051-0.007,0.104-0.013,0.157-0.013c1.093,0,1.55-0.52,2.241-1.308c0.828-0.941,1.86-2.11,4.101-2.07 c0.044-0.002,0.087-0.003,0.129-0.003c2.163,0,3.173,1.148,3.986,2.073c0.691,0.788,1.148,1.308,2.241,1.308"/>
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,16.684 c1.092,0,1.55-0.521,2.241-1.308c0.828-0.941,1.861-2.111,4.101-2.071c0.043,0,0.087-0.001,0.13-0.001 c2.163,0,3.171,1.148,3.985,2.072c0.692,0.788,1.149,1.308,2.241,1.308c0.054,0,0.106,0.005,0.157,0.012 c0.051-0.007,0.104-0.012,0.157-0.012c1.093,0,1.55-0.521,2.241-1.308c0.828-0.941,1.86-2.111,4.101-2.071 c0.044,0,0.087-0.001,0.129-0.001c2.163,0,3.173,1.148,3.986,2.072c0.691,0.788,1.148,1.308,2.241,1.308"/>
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,9.714 c1.092,0,1.55-0.519,2.241-1.307c0.828-0.941,1.861-2.111,4.101-2.071c0.043-0.001,0.087-0.001,0.13-0.001 c2.163,0,3.171,1.147,3.985,2.072c0.692,0.788,1.149,1.307,2.241,1.307c0.054,0,0.106,0.006,0.157,0.014 c0.051-0.007,0.104-0.014,0.157-0.014c1.093,0,1.55-0.519,2.241-1.307c0.828-0.941,1.86-2.111,4.101-2.071 c0.044-0.001,0.087-0.001,0.129-0.001c2.163,0,3.173,1.147,3.986,2.072c0.691,0.788,1.148,1.307,2.241,1.307"/>
               </svg> */}
            <svg className="shape waves small" width="100%" height="100%" viewBox="0 0 800 600" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421'}}>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M804.947,283.363C804.621,283.363 804.305,283.191 804.135,282.887C797.412,270.83 789.164,262.64 789.081,262.558C788.715,262.199 788.712,261.611 789.071,261.246C789.431,260.881 790.019,260.877 790.383,261.236C790.467,261.319 798.897,269.683 805.756,281.982C806.006,282.43 805.845,282.995 805.398,283.245C805.255,283.325 805.1,283.363 804.947,283.363Z" style={{strokeWidth: '0.7px'}} />
              </g>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M786.239,263.881C783.875,263.881 781.823,262.93 780.304,261.131C779.727,260.448 779.13,259.602 778.5,258.707C777.789,257.699 777.052,256.656 776.335,255.84C774.935,254.249 773.569,253.361 773.555,253.352C773.259,253.162 773.096,252.82 773.134,252.47C773.172,252.12 773.405,251.822 773.735,251.7C773.798,251.677 775.297,251.134 777.411,251.134C779.766,251.134 783.183,251.817 786.09,255.074C787.002,256.095 787.924,257.307 788.833,258.677C789.956,260.37 790.675,261.664 790.706,261.718C790.83,261.941 790.856,262.204 790.779,262.448C790.703,262.69 790.53,262.891 790.3,263.003C790.227,263.038 788.47,263.881 786.239,263.881ZM776.183,253.061C776.654,253.48 777.187,253.999 777.728,254.614C778.512,255.505 779.277,256.589 780.016,257.638C780.624,258.498 781.197,259.312 781.722,259.933C782.894,261.321 784.414,262.025 786.239,262.025C787.143,262.025 787.952,261.854 788.536,261.682C788.225,261.166 787.797,260.474 787.286,259.703C786.425,258.406 785.558,257.265 784.706,256.31C782.256,253.566 779.386,252.99 777.411,252.99C776.965,252.99 776.552,253.018 776.183,253.061Z" style={{strokeWidth: '0.7px'}} />
              </g>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M789.894,263.097C789.837,263.097 789.779,263.091 789.721,263.08C789.471,263.033 789.251,262.884 789.113,262.67C789.08,262.618 788.281,261.371 787.321,259.582C786.545,258.137 785.913,256.751 785.443,255.461C782.739,248.035 788.259,243.03 788.316,242.98C788.578,242.746 788.953,242.684 789.278,242.814C789.604,242.946 789.829,243.251 789.856,243.602C789.858,243.619 789.994,245.242 790.734,247.228C791.113,248.246 791.683,249.388 792.235,250.491C792.725,251.471 793.188,252.397 793.517,253.229C795.337,257.826 792.297,261.578 790.437,262.921C790.278,263.036 790.088,263.097 789.894,263.097ZM788.354,245.766C787.151,247.48 785.675,250.675 787.187,254.826C787.627,256.032 788.222,257.337 788.956,258.704C789.394,259.521 789.802,260.227 790.111,260.745C791.237,259.615 793.07,257.142 791.791,253.912C791.492,253.155 791.047,252.264 790.575,251.321C790.002,250.174 789.408,248.988 788.994,247.875C788.707,247.103 788.501,246.382 788.354,245.766Z" style={{strokeWidth: '0.7px'}} />
              </g>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M778.618,253.004C778.185,253.004 777.797,252.7 777.709,252.26C777.404,250.745 778.091,249.011 778.804,247.515C779.215,246.653 778.975,245.649 778.973,245.64C778.851,245.144 779.151,244.64 779.645,244.515C780.141,244.392 780.643,244.684 780.771,245.178C780.814,245.346 781.175,246.855 780.48,248.313C780.129,249.051 779.304,250.781 779.529,251.892C779.63,252.395 779.304,252.885 778.802,252.986C778.74,252.998 778.678,253.004 778.618,253.004Z" style={{strokeWidth: '0.7px'}} />
              </g>
              <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                <path fill="none" stroke="#000000" d="M786.336,248.388C786.128,248.388 785.918,248.318 785.744,248.174C784.872,247.451 782.958,247.359 782.141,247.32C780.528,247.243 779.369,246.21 779.242,246.093C778.866,245.744 778.843,245.157 779.192,244.781C779.54,244.405 780.129,244.383 780.504,244.73C780.506,244.734 781.277,245.42 782.23,245.466C783.886,245.545 785.74,245.759 786.929,246.745C787.324,247.073 787.379,247.658 787.051,248.052C786.868,248.274 786.603,248.388 786.336,248.388Z" style={{strokeWidth: '0.7px'}} />
              </g>
            </svg>
          </div>
          <div className="shapes two">
            <div className="rotate-area">
              <div className="shape circle" />
              <div className="shape diamond" />
              <svg className="shape waves" width="100%" height="100%" viewBox="0 0 800 600" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421'}}>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M804.947,283.363C804.621,283.363 804.305,283.191 804.135,282.887C797.412,270.83 789.164,262.64 789.081,262.558C788.715,262.199 788.712,261.611 789.071,261.246C789.431,260.881 790.019,260.877 790.383,261.236C790.467,261.319 798.897,269.683 805.756,281.982C806.006,282.43 805.845,282.995 805.398,283.245C805.255,283.325 805.1,283.363 804.947,283.363Z" style={{strokeWidth: '0.7px'}} />
                </g>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M786.239,263.881C783.875,263.881 781.823,262.93 780.304,261.131C779.727,260.448 779.13,259.602 778.5,258.707C777.789,257.699 777.052,256.656 776.335,255.84C774.935,254.249 773.569,253.361 773.555,253.352C773.259,253.162 773.096,252.82 773.134,252.47C773.172,252.12 773.405,251.822 773.735,251.7C773.798,251.677 775.297,251.134 777.411,251.134C779.766,251.134 783.183,251.817 786.09,255.074C787.002,256.095 787.924,257.307 788.833,258.677C789.956,260.37 790.675,261.664 790.706,261.718C790.83,261.941 790.856,262.204 790.779,262.448C790.703,262.69 790.53,262.891 790.3,263.003C790.227,263.038 788.47,263.881 786.239,263.881ZM776.183,253.061C776.654,253.48 777.187,253.999 777.728,254.614C778.512,255.505 779.277,256.589 780.016,257.638C780.624,258.498 781.197,259.312 781.722,259.933C782.894,261.321 784.414,262.025 786.239,262.025C787.143,262.025 787.952,261.854 788.536,261.682C788.225,261.166 787.797,260.474 787.286,259.703C786.425,258.406 785.558,257.265 784.706,256.31C782.256,253.566 779.386,252.99 777.411,252.99C776.965,252.99 776.552,253.018 776.183,253.061Z" style={{strokeWidth: '0.7px'}} />
                </g>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M789.894,263.097C789.837,263.097 789.779,263.091 789.721,263.08C789.471,263.033 789.251,262.884 789.113,262.67C789.08,262.618 788.281,261.371 787.321,259.582C786.545,258.137 785.913,256.751 785.443,255.461C782.739,248.035 788.259,243.03 788.316,242.98C788.578,242.746 788.953,242.684 789.278,242.814C789.604,242.946 789.829,243.251 789.856,243.602C789.858,243.619 789.994,245.242 790.734,247.228C791.113,248.246 791.683,249.388 792.235,250.491C792.725,251.471 793.188,252.397 793.517,253.229C795.337,257.826 792.297,261.578 790.437,262.921C790.278,263.036 790.088,263.097 789.894,263.097ZM788.354,245.766C787.151,247.48 785.675,250.675 787.187,254.826C787.627,256.032 788.222,257.337 788.956,258.704C789.394,259.521 789.802,260.227 790.111,260.745C791.237,259.615 793.07,257.142 791.791,253.912C791.492,253.155 791.047,252.264 790.575,251.321C790.002,250.174 789.408,248.988 788.994,247.875C788.707,247.103 788.501,246.382 788.354,245.766Z" style={{strokeWidth: '0.7px'}} />
                </g>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M778.618,253.004C778.185,253.004 777.797,252.7 777.709,252.26C777.404,250.745 778.091,249.011 778.804,247.515C779.215,246.653 778.975,245.649 778.973,245.64C778.851,245.144 779.151,244.64 779.645,244.515C780.141,244.392 780.643,244.684 780.771,245.178C780.814,245.346 781.175,246.855 780.48,248.313C780.129,249.051 779.304,250.781 779.529,251.892C779.63,252.395 779.304,252.885 778.802,252.986C778.74,252.998 778.678,253.004 778.618,253.004Z" style={{strokeWidth: '0.7px'}} />
                </g>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M786.336,248.388C786.128,248.388 785.918,248.318 785.744,248.174C784.872,247.451 782.958,247.359 782.141,247.32C780.528,247.243 779.369,246.21 779.242,246.093C778.866,245.744 778.843,245.157 779.192,244.781C779.54,244.405 780.129,244.383 780.504,244.73C780.506,244.734 781.277,245.42 782.23,245.466C783.886,245.545 785.74,245.759 786.929,246.745C787.324,247.073 787.379,247.658 787.051,248.052C786.868,248.274 786.603,248.388 786.336,248.388Z" style={{strokeWidth: '0.7px'}} />
                </g>
              </svg>
              <svg className="shape waves small" width="100%" height="100%" viewBox="0 0 800 600" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421'}}>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M804.947,283.363C804.621,283.363 804.305,283.191 804.135,282.887C797.412,270.83 789.164,262.64 789.081,262.558C788.715,262.199 788.712,261.611 789.071,261.246C789.431,260.881 790.019,260.877 790.383,261.236C790.467,261.319 798.897,269.683 805.756,281.982C806.006,282.43 805.845,282.995 805.398,283.245C805.255,283.325 805.1,283.363 804.947,283.363Z" style={{strokeWidth: '0.7px'}} />
                </g>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M786.239,263.881C783.875,263.881 781.823,262.93 780.304,261.131C779.727,260.448 779.13,259.602 778.5,258.707C777.789,257.699 777.052,256.656 776.335,255.84C774.935,254.249 773.569,253.361 773.555,253.352C773.259,253.162 773.096,252.82 773.134,252.47C773.172,252.12 773.405,251.822 773.735,251.7C773.798,251.677 775.297,251.134 777.411,251.134C779.766,251.134 783.183,251.817 786.09,255.074C787.002,256.095 787.924,257.307 788.833,258.677C789.956,260.37 790.675,261.664 790.706,261.718C790.83,261.941 790.856,262.204 790.779,262.448C790.703,262.69 790.53,262.891 790.3,263.003C790.227,263.038 788.47,263.881 786.239,263.881ZM776.183,253.061C776.654,253.48 777.187,253.999 777.728,254.614C778.512,255.505 779.277,256.589 780.016,257.638C780.624,258.498 781.197,259.312 781.722,259.933C782.894,261.321 784.414,262.025 786.239,262.025C787.143,262.025 787.952,261.854 788.536,261.682C788.225,261.166 787.797,260.474 787.286,259.703C786.425,258.406 785.558,257.265 784.706,256.31C782.256,253.566 779.386,252.99 777.411,252.99C776.965,252.99 776.552,253.018 776.183,253.061Z" style={{strokeWidth: '0.7px'}} />
                </g>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M789.894,263.097C789.837,263.097 789.779,263.091 789.721,263.08C789.471,263.033 789.251,262.884 789.113,262.67C789.08,262.618 788.281,261.371 787.321,259.582C786.545,258.137 785.913,256.751 785.443,255.461C782.739,248.035 788.259,243.03 788.316,242.98C788.578,242.746 788.953,242.684 789.278,242.814C789.604,242.946 789.829,243.251 789.856,243.602C789.858,243.619 789.994,245.242 790.734,247.228C791.113,248.246 791.683,249.388 792.235,250.491C792.725,251.471 793.188,252.397 793.517,253.229C795.337,257.826 792.297,261.578 790.437,262.921C790.278,263.036 790.088,263.097 789.894,263.097ZM788.354,245.766C787.151,247.48 785.675,250.675 787.187,254.826C787.627,256.032 788.222,257.337 788.956,258.704C789.394,259.521 789.802,260.227 790.111,260.745C791.237,259.615 793.07,257.142 791.791,253.912C791.492,253.155 791.047,252.264 790.575,251.321C790.002,250.174 789.408,248.988 788.994,247.875C788.707,247.103 788.501,246.382 788.354,245.766Z" style={{strokeWidth: '0.7px'}} />
                </g>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M778.618,253.004C778.185,253.004 777.797,252.7 777.709,252.26C777.404,250.745 778.091,249.011 778.804,247.515C779.215,246.653 778.975,245.649 778.973,245.64C778.851,245.144 779.151,244.64 779.645,244.515C780.141,244.392 780.643,244.684 780.771,245.178C780.814,245.346 781.175,246.855 780.48,248.313C780.129,249.051 779.304,250.781 779.529,251.892C779.63,252.395 779.304,252.885 778.802,252.986C778.74,252.998 778.678,253.004 778.618,253.004Z" style={{strokeWidth: '0.7px'}} />
                </g>
                <g transform="matrix(12.1844,0.0107944,-0.0112105,13.5408,-9219.79,-3274.11)">
                  <path fill="none" stroke="#000000" d="M786.336,248.388C786.128,248.388 785.918,248.318 785.744,248.174C784.872,247.451 782.958,247.359 782.141,247.32C780.528,247.243 779.369,246.21 779.242,246.093C778.866,245.744 778.843,245.157 779.192,244.781C779.54,244.405 780.129,244.383 780.504,244.73C780.506,244.734 781.277,245.42 782.23,245.466C783.886,245.545 785.74,245.759 786.929,246.745C787.324,247.073 787.379,247.658 787.051,248.052C786.868,248.274 786.603,248.388 786.336,248.388Z" style={{strokeWidth: '0.7px'}} />
                </g>
              </svg>
            </div>
          </div>
          <section className="content-wrapper splash">
            <div className="gradient-splash green" />
            <div className="content-splash">
              <div className="baseline">
                <div className="desktop-lookbook">
                  <div className="sprite-lookbook">
                    <img width={1614} height={16800} src="static/img/sprite-lookbook2.png" />
                  </div>
                </div>
                <div className="mobile-lookbook">
                  <h3>
                    <span className="top">C</span>
                    <span className="bottom">O</span>
                    <span className="top">R</span>
                    <span className="bottom">D</span>
                  </h3>
                  <h3 className="second">
                    <span className="top">I</span>
                    <span className="bottom">A</span>
                    <span className="top">L</span>
                    <span className="bottom">L</span>
                    <span className="top">Y</span>
                  </h3>
                </div>
                <h1>Wedding Website</h1>
              </div>
            </div>
          </section>
          <section className="content-wrapper slipper one">
            <div className="content-slipper">
              <div className="gradient red" />
              <img className="slipper-object" src="static/img/vintage-wedding-website2.png" />
              <div className="description-slipper">
                <span>like</span>
                <h2>Vintage</h2>
                <p>Looking for eclectic charm from some bygone era?  Then our Vintage style is perfect for you.
                  Create a design that is both appealing and memorable, conjuring up the image of those lovely days long gone.
                </p>
                <a href="https://app.cordially.co/template/vintage" target="_blank" className="link-shop" data-color="#ff4f59">
                  <div className="overlay-color" />
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>v</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                </a>
              </div>
            </div>
            <span className="letter">
              {/* <img class="sprite-letter" width="1716" height="4158" src="static/img/sprite-b.png" /> */}
              <img className="sprite-letter" width={1716} height={4158} src="static/img/sprite-v2.png" />
              <span>V</span>
            </span>
          </section>
          <section className="content-wrapper slipper two">
            <div className="content-slipper">
              <div className="gradient grey" />
              <img className="slipper-object" src="static/img/greenery-wedding-website.png" />
              <div className="description-slipper">
                <span>like</span>
                <h2>Greenery</h2>
                <p>Think lush green countryside, fresh flowers and the scent of grass sprinkled with early-morning dew and you have our Greenery theme.
                  Great at any time of year but loved by those with spring and summer weddings.
                </p>
                <a href="https://app.cordially.co/template/greenery" target="_blank" className="link-shop" data-color="#a7a4b0">
                  <div className="overlay-color" />
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>v</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                </a>
              </div>
            </div>
            <span className="letter">
              <img className="sprite-letter" width={1716} height={4158} src="static/img/sprite-g.png" />
              <span>G</span>
            </span>
          </section>
          <section className="content-wrapper slipper three">
            <div className="content-slipper">
              <div className="gradient yellow" />
              <img className="slipper-object" src="static/img/modern-wedding-website.png" />
              <div className="description-slipper">
                <span>like</span>
                <h2>Modern</h2>
                <p>Perfect for those that want clean crisp lines and a contemporary and up-to-the-minute appearance, our
                  Modern style is all that you need and more.
                  Ideal for those that want to keep their wedding minimalistic.
                </p>
                <a href="https://app.cordially.co/template/modern" target="_blank" className="link-shop" data-color="#e0b15c">
                  <div className="overlay-color" />
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>v</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                </a>
              </div>
            </div>
            <span className="letter">
              <img className="sprite-letter" width={1716} height={4158} src="static/img/sprite-m.png" />
              <span>M</span>
            </span>
          </section>
          <section className="content-wrapper slipper four">
            <div className="content-slipper">
              <div className="gradient pink" />
              <img className="slipper-object" src="static/img/rustic-wedding-website.png" />
              <div className="description-slipper">
                <span>like</span>
                <h2>Rustic</h2>
                <p>Charming homespun barns with countrified and homely surroundings give a hint of what our Rustic theme is based upon.
                  If you love the smell of natural wood and prefer your wedding plain and simple, this is for you.
                </p>
                <a href="https://app.cordially.co/template/rustic" target="_blank" className="link-shop" data-color="#f3bbc3">
                  <div className="overlay-color" />
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>v</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                </a>
              </div>
            </div>
            <span className="letter">
              <img className="sprite-letter" width={1716} height={4158} src="static/img/sprite-r.png" />
              <span>R</span>
            </span>
          </section>
          <style dangerouslySetInnerHTML={{__html: "\n            .slipper-object.object-video1 {\n            margin-top: -120px;\n            }\n            .slipper-object.object-video2 {\n            margin-top: -80px;\n            }\n            .description-slipper  {\n            top:40%;\n            }\n            .slipper.five .description-slipper h2 {\n            color: #fff;\n            }\n            #player {\n            background-color: #fff;\n            }\n            @media screen and (max-width: 550px) {\n            .slipper.five .slipper-object.object-video1, .slipper.five .slipper-object.object-video2 {\n            top: 30%;\n            width: 90%;\n            left: 5%;\n            }\n            .slipper.five .description-slipper h2 {\n            color: inherit;\n            }\n            }\n         " }} />
          <section className="content-wrapper slipper five">
            <div className="content-slipper">
              <div className="gradient victoria" style={{width: '100%'}} />
              <iframe className="slipper-object object-video1" src="https://player.vimeo.com/video/223828928?autoplay=1&loop=1&title=0&byline=0&portrait=0" width={640} height={360} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
              <img className="slipper-object object-video2" src="static/img/ekran.png" />
              <div className="description-slipper">
                <h2>PERSONAL RSVPs</h2>
                <p>
                  What better way of keeping track of your guests and the RSVPs than using our
                  personalized online invitations? Each one gets sent by email incorporating your wedding
                  details and with the guest’s name included in the design. Make your guests feel
                  as special as if a beautifully calligraphed paper invitation had landed through their letterbox.
                </p>
                {/* <a href="http://store.melanie-f.com/product/victoria" target="_blank" class="link-shop" data-color="#296269">
                     <div class="overlay-color"></div>
                     <span>W</span>
                     <span>a</span>
                     <span>t</span>
                     <span>c</span>
                     <span>h</span>
                     </a> */}
              </div>
            </div>
            {/* <span class="letter">
               <img class="sprite-letter" width="1716" height="3780" src="static/img/sprite-v.png" />
               <span>V</span>
               </span> */}
          </section>
          <section className="content-wrapper slipper six">
            <div className="content-slipper">
              <div className="gradient blue" style={{width: '100%'}} />
              <img className="slipper-object object-video2" src="static/img/ekran.png" />
              <iframe className="slipper-object object-video1" src="https://player.vimeo.com/video/223817652?autoplay=1&loop=1&title=0&byline=0&portrait=0" width={640} height={320} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
              <div className="description-slipper" style={{top: '43%'}}>
                <h2 style={{color: '#fff'}}>EASY TO SET UP</h2>
                <p>
                  You don’t have to be a website whizz to set up your own wedding website.  Each template is super-easy to customize; simply click on text to edit.  Add maps, registries and choose which sections of the page you want to use.  Don’t want something?  Simply hide it.
                </p>
                {/* <a href="http://store.melanie-f.com/product/celeste" target="_blank" class="link-shop" data-color="#6eaccd">
                     <div class="overlay-color"></div>
                     <span>W</span>
                     <span>a</span>
                     <span>t</span>
                     <span>c</span>
                     <span>h</span>
                     </a> */}
              </div>
            </div>
            {/* <span class="letter">
               <img class="sprite-letter" width="1716" height="4158" src="static/img/sprite-c.png" />
               <span>C</span>
               </span> */}
          </section>
          <section className="design">
            <h2>FEATURES</h2>
            <div className="wrapper-design">
              {/* <div class="design-1"></div>
                  <div class="design-2"></div>
                  <div class="design-3"></div>
                  <div class="design-4"></div> */}
              <div className="block-design style">
                <h3>
                  <span>R</span>
                  <span>S</span>
                  <span>V</span>
                  <span>P</span>
                  <span>s</span>
                </h3>
                <p>
                  Take the stress out of tracking RSVPs.  Because each invitation is emailed, you can easily see who clicked your email, who opened it and most of all, who sent an RSVP response.  The system does all the hard work so you don’t have to.
                </p>
              </div>
              <div className="block-design pratique">
                <h3>
                  <span>G</span>
                  <span>u</span>
                  <span>e</span>
                  <span>s</span>
                  <span>t</span>
                  <span>-</span>
                  <span>L</span>
                  <span>i</span>
                  <span>s</span>
                  <span>t</span>
                </h3>
                <p>
                  Watch as your guest list grows and changes; immediately see who is coming to your wedding and who cannot.  Send emails quickly and easily and keep a running list of who has responded. It’s that simple.
                </p>
              </div>
              <div className="block-design antiderapant en">
                <h3>
                  <span>C</span>
                  <span>o</span>
                  <span>l</span>
                  <span>l</span>
                  <span>a</span>
                  <span>b</span>
                  <span>o</span>
                  <span>r</span>
                  <span>a</span>
                  <span>t</span>
                  <span>e</span>
                </h3>
                <p>
                  Share your wedding planing tasks! Invite your partner and your wedding planner to collaborate on your website copy and guests list. You can give them permission to edit sections and add guests if you wish.
                </p>
              </div>
              <div className="block-design confort">
                <h3>
                  <span>T</span>
                  <span>r</span>
                  <span>a</span>
                  <span>n</span>
                  <span>s</span>
                  <span>l</span>
                  <span>a</span>
                  <span>t</span>
                  <span>e</span>
                </h3>
                <p>
                  Not everyone wants their Wedding Invitation or guest information in English.
                  Your website allows you to translate any parts of the application that are exposed to the guest to be easily converted into your language.
                </p>
              </div>
              <div className="block-design maintien en">
                <h3>
                  <span>S</span>
                  <span>u</span>
                  <span>p</span>
                  <span>p</span>
                  <span>o</span>
                  <span>r</span>
                  <span>t</span>
                </h3>
                <p>
                  Need help? We are here to help solve any problem you may encounter whilst working on your wedding website.  Don’t get worried or tie yourself into knots, simply email us at: support@cordially.co and we’ll be right in touch!
                </p>
              </div>
              <div className="block-design raffinement">
                <h3>
                  <span>F</span>
                  <span>i</span>
                  <span>n</span>
                  <span>e</span>
                  <span>-</span>
                  <span>d</span>
                  <span>e</span>
                  <span>s</span>
                  <span>i</span>
                  <span>g</span>
                  <span>n</span>
                </h3>
                <p>
                  Beautifully subtle and finely tailored design, bespoke to suit you.  You will find our schemes pixel perfect, wonderfully crafted and sensitively and skillfully drawn.
                  No two weddings are the same and neither are our websites; it really is all about you.
                </p>
              </div>
            </div>
            <section className="footer">
              <div className="gradient-footer" />
              <div className="wrapper-footer">
                <div className="footer-shop">
                  <h2>It is Free</h2>
                  <h3>Create your stunning wedding website using top - notch websites creator.</h3>
                  <p>Do it. With Love. Make your wedding planing easier with Cordially!</p>
                  <a target="_blank" href="https://app.cordially.co/template/vintage" className="link-footer" data-color="#000000">
                    <div className="overlay-color" />
                    <span>C</span>
                    <span>r</span>
                    <span>e</span>
                    <span>a</span>
                    <span>t</span>
                    <span>e</span>
                    <span>&nbsp;</span>
                    <span>y</span>
                    <span>o</span>
                    <span>u</span>
                    <span>r</span>
                    <span>&nbsp;</span>
                    <span>o</span>
                    <span>w</span>
                    <span>n</span>
                    <span>!</span>
                  </a>
                </div>
              </div>
              <div className="social-menu">
                {/* <a target="_blank" href="https://twitter.com/miel_anis">
                     <img class="twitter" onerror="this.src = this.src.replace(/svg/g,'png')" src="static/img/twitter.svg" />
                     </a> */}
                <a target="_blank" href="https://www.pinterest.com/cordiallyco/">
                  <img className="fb" src="static/img/pinterest.png" />
                </a>
                <a target="_blank" href="https://www.facebook.com/cordially.co">
                  <img className="fb" src="static/img/facebook.png" />
                </a>
              </div>
              <div className="credits">
                Cordially  ©  Cordially Wedding Website
              </div>
            </section>
          </section>
          <section className="menu">
            <div className="gradient-menu" />
            <div className="half-screen">
              <div className="left">
                <a target="_blank" href="https://app.cordially.co/admin/register">
                  <span className="text-link">Features</span>
                  <span className="line-link" />
                </a>
              </div>
              <div className="right">
                <a target="_blank" href="https://app.cordially.co/admin/login">
                  <span className="text-link">Login</span>
                  <span className="line-link" />
                </a>
              </div>
            </div>
            <div className="wrapper-menu">
              {/* <img class="logo-menu" onerror="this.src = this.src.replace(/svg/g,'png')" src="static/img/logo-white.svg" /> */}
              <span className="slipper-link">
                <span className="text-link">Vintage<span className="line-link" /></span>
              </span>
              <span className="slipper-link">
                <span className="text-link">Greenery<span className="line-link" /></span>
              </span>
              <span className="slipper-link">
                <span className="text-link">Modern<span className="line-link" /></span>
              </span>
              <span className="slipper-link">
                <span className="text-link">Rustic<span className="line-link" /></span>
              </span>
              {/* <span class="slipper-link">
                  <span class="text-link">Victoria<span class="line-link"></span></span>
                  </span>
                  <span class="slipper-link">
                  <span class="text-link">Celeste<span class="line-link"></span></span>
                  </span> */}
            </div>
          </section>
          <a href="https://app.cordially.co/admin/guest-list" className="nav-login"
          style={{marginRight: 20, width: 150, display: 'block', opacity: 1}}>
            <span className="wrapper-letters">
              <span>L</span>
              <span>o</span>
              <span>g</span>
              <span>i</span>
              <span>n</span>
            </span>
            <div className="line-menu" />
            <div className="line-menu-hover" />
          </a>
          <a href="#" className="nav-menu">
            <span className="wrapper-letters">
              <span>m</span>
              <span>e</span>
              <span>n</span>
              <span>u</span>
            </span>
            <div className="line-menu" />
            <div className="line-menu-hover" />
          </a>
        </div>
        <div className="logo-wrapper">
          <style dangerouslySetInnerHTML={{__html: "\n            .header-link {\n            border: 1px solid #84ACE1;\n            position: relative;\n            text-decoration: none;\n            padding:11px 50px;\n            border-radius: 25px;\n            font-size: 18px;\n            font-family: DidotItalic;\n            color: #84ACE1;\n            top: 20px;\n            line-height: 40px;\n            transition: all 1s ease;\n            }\n            .header-link:hover {\n            background-color: #84ACE1;\n            color: #fff;\n            z-index: 9\n            }\n         " }} />
          <a target="_blank" href="https://app.cordially.co/template/vintage" className="header-link">
            Create Your Own
          </a>
          <div className="scroll">
            <div className="scroll-text">or</div>
            <div className="scroll-text">scroll</div>
            <div className="line-wrapper">
              <div className="line" />
            </div>
          </div>
        </div>
        <noscript>&lt;img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=680330822129856&amp;ev=PageView&amp;noscript=1"
          /&gt;</noscript>
      </div>
    );
  }
}

export default Landing;
