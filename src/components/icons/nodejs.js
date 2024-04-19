import React from "react";

const nodejs = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 128 128"
      fill="none"
    >
      <path
        d="M114.325 80.749C114.035 80.749 113.747 80.673 113.493 80.525L110.843 78.957C110.447 78.736 110.64 78.657 110.771 78.612C111.299 78.428 111.406 78.385 111.969 78.067C112.028 78.034 112.105 78.046 112.166 78.082L114.201 79.291C114.239 79.3112 114.281 79.3218 114.324 79.3218C114.367 79.3218 114.409 79.3112 114.447 79.291L122.384 74.71C122.422 74.688 122.452 74.6565 122.474 74.6188C122.495 74.5811 122.506 74.5384 122.506 74.495V65.335C122.506 65.291 122.495 65.2478 122.473 65.2094C122.452 65.171 122.421 65.1389 122.383 65.116L114.449 60.539C114.412 60.5184 114.369 60.5075 114.327 60.5075C114.284 60.5075 114.242 60.5184 114.204 60.539L106.271 65.117C106.234 65.1398 106.202 65.1717 106.18 65.2099C106.159 65.248 106.147 65.2911 106.146 65.335V74.495C106.146 74.583 106.195 74.666 106.271 74.707L108.445 75.964C109.625 76.553 110.348 75.859 110.348 75.161V66.116C110.348 65.989 110.451 65.888 110.578 65.888H111.585C111.71 65.888 111.814 65.989 111.814 66.116V75.161C111.814 76.735 110.957 77.638 109.464 77.638C109.005 77.638 108.644 77.638 107.636 77.142L105.555 75.944C105.302 75.7965 105.092 75.5851 104.946 75.331C104.8 75.077 104.723 74.7891 104.723 74.496V65.336C104.723 64.741 105.04 64.186 105.555 63.89L113.492 59.303C113.748 59.1638 114.034 59.0908 114.326 59.0908C114.617 59.0908 114.903 59.1638 115.159 59.303L123.096 63.89C123.61 64.187 123.929 64.742 123.929 65.336V74.496C123.929 74.7891 123.852 75.0769 123.705 75.3309C123.559 75.5849 123.349 75.7963 123.096 75.944L115.159 80.526C114.906 80.673 114.618 80.75 114.325 80.749ZM116.778 74.438C113.303 74.438 112.576 72.843 112.576 71.506C112.576 71.4452 112.601 71.387 112.644 71.344C112.687 71.3011 112.745 71.277 112.806 71.277H113.832C113.887 71.2768 113.94 71.2963 113.982 71.3319C114.024 71.3674 114.052 71.4168 114.06 71.471C114.214 72.516 114.677 73.043 116.778 73.043C118.449 73.043 119.161 72.665 119.161 71.777C119.161 71.265 118.959 70.886 116.361 70.631C114.189 70.416 112.846 69.937 112.846 68.198C112.846 66.597 114.196 65.641 116.458 65.641C119.001 65.641 120.259 66.524 120.418 68.418C120.421 68.4499 120.417 68.4819 120.406 68.5122C120.396 68.5425 120.38 68.5703 120.358 68.594C120.336 68.6168 120.31 68.635 120.282 68.6475C120.253 68.66 120.222 68.6667 120.19 68.667H119.159C119.107 68.6671 119.057 68.6494 119.016 68.6168C118.976 68.5843 118.947 68.5388 118.936 68.488C118.688 67.388 118.088 67.037 116.457 67.037C114.632 67.037 114.42 67.674 114.42 68.149C114.42 68.726 114.67 68.894 117.135 69.22C119.574 69.543 120.733 69.999 120.733 71.714C120.734 73.447 119.292 74.438 116.778 74.438Z"
        fill="#83CD29"
      />
      <path
        d="M97.9818 68.4301C98.2948 68.2471 98.4878 67.9131 98.4878 67.5501V65.1961C98.4878 64.8341 98.2958 64.5001 97.9818 64.3171L89.6178 59.4611C89.4631 59.3711 89.2875 59.3236 89.1086 59.3232C88.9297 59.3229 88.7538 59.3697 88.5988 59.4591L80.1828 64.3181C80.0285 64.4074 79.9003 64.5357 79.8112 64.6902C79.722 64.8446 79.675 65.0197 79.6748 65.1981V74.9141C79.6748 75.2791 79.8708 75.6171 80.1888 75.7981L88.5518 80.5631C88.8598 80.7401 89.2378 80.7411 89.5488 80.5691L94.6068 77.7571C94.6855 77.7134 94.7513 77.6495 94.7972 77.5721C94.8432 77.4946 94.8677 77.4064 94.8683 77.3163C94.8689 77.2263 94.8456 77.1377 94.8007 77.0596C94.7558 76.9816 94.6909 76.9168 94.6128 76.8721L86.1448 72.0121C86.0671 71.9678 86.0025 71.9038 85.9576 71.8265C85.9126 71.7493 85.8889 71.6615 85.8888 71.5721V68.5261C85.8888 68.3441 85.9858 68.1771 86.1428 68.0871L88.7798 66.5671C88.8568 66.5224 88.9443 66.4988 89.0333 66.4988C89.1223 66.4988 89.2098 66.5224 89.2868 66.5671L91.9238 68.0871C92.0011 68.1314 92.0654 68.1953 92.1102 68.2724C92.155 68.3494 92.1786 68.4369 92.1788 68.5261V70.9221C92.1783 71.0117 92.2015 71.0998 92.2461 71.1775C92.2907 71.2552 92.3551 71.3197 92.4328 71.3644C92.5104 71.4091 92.5985 71.4324 92.6881 71.432C92.7777 71.4316 92.8656 71.4075 92.9428 71.3621L97.9818 68.4301Z"
        fill="#404137"
      />
      <path
        d="M88.984 67.9741C89.0138 67.9575 89.0473 67.9487 89.0815 67.9487C89.1156 67.9487 89.1492 67.9575 89.179 67.9741L90.794 68.9071C90.854 68.9421 90.891 69.0071 90.891 69.0761V70.9411C90.891 71.0111 90.854 71.0751 90.794 71.1101L89.179 72.0421C89.1494 72.0593 89.1157 72.0684 89.0815 72.0684C89.0472 72.0684 89.0136 72.0593 88.984 72.0421L87.37 71.1101C87.3401 71.0931 87.3154 71.0685 87.2981 71.0388C87.2809 71.0092 87.2719 70.9754 87.272 70.9411V69.0761C87.272 69.0071 87.309 68.9421 87.37 68.9071L88.984 67.9741Z"
        fill="#83CD29"
      />
      <path
        d="M67.0829 71.8538C67.0829 71.9438 67.0349 72.0278 66.9559 72.0738L64.0659 73.7398C64.0274 73.7624 63.9835 73.7743 63.9389 73.7743C63.8943 73.7743 63.8504 73.7624 63.8119 73.7398L60.9219 72.0738C60.8834 72.0514 60.8513 72.0193 60.8291 71.9807C60.8068 71.9421 60.795 71.8983 60.7949 71.8538V68.5158C60.7949 68.4258 60.8439 68.3408 60.9219 68.2948L63.8119 66.6268C63.8504 66.6037 63.8945 66.5915 63.9394 66.5915C63.9843 66.5915 64.0284 66.6037 64.0669 66.6268L66.9579 68.2948C66.9962 68.3176 67.028 68.3499 67.05 68.3887C67.0721 68.4274 67.0838 68.4712 67.0839 68.5158V71.8538H67.0829ZM67.8639 47.1378C67.7864 47.0954 67.6993 47.0739 67.611 47.0753C67.5227 47.0766 67.4362 47.1008 67.3601 47.1456C67.284 47.1903 67.2207 47.254 67.1765 47.3304C67.1323 47.4069 67.1087 47.4935 67.1079 47.5818V60.4968C67.1077 60.5591 67.0912 60.6202 67.0602 60.6742C67.0291 60.7282 66.9846 60.7732 66.9309 60.8048C66.8767 60.8357 66.8153 60.852 66.7529 60.852C66.6905 60.852 66.6291 60.8357 66.5749 60.8048L64.4669 59.5898C64.3125 59.5009 64.1375 59.4541 63.9594 59.4541C63.7813 59.4541 63.6063 59.5009 63.4519 59.5898L55.0339 64.4478C54.8792 64.5371 54.7508 64.6655 54.6614 64.8201C54.5721 64.9748 54.525 65.1502 54.5249 65.3288V75.0478C54.5249 75.4108 54.7189 75.7458 55.0329 75.9288L63.4509 80.7898C63.7649 80.9718 64.1529 80.9718 64.4679 80.7898L72.8879 75.9288C73.0422 75.8392 73.1704 75.7107 73.2595 75.5561C73.3487 75.4015 73.3957 75.2262 73.3959 75.0478V50.8208C73.3959 50.4528 73.1959 50.1128 72.8749 49.9328L67.8639 47.1378Z"
        fill="#404137"
      />
      <path
        d="M38.2379 59.4069C38.3923 59.3176 38.5676 59.2705 38.7459 59.2705C38.9243 59.2705 39.0996 59.3176 39.2539 59.4069L47.6719 64.2639C47.9859 64.4459 48.1799 64.7819 48.1799 65.1449V74.8669C48.1799 75.2299 47.9859 75.5659 47.6719 75.7479L39.2549 80.6089C39.1002 80.6979 38.9249 80.7447 38.7464 80.7447C38.568 80.7447 38.3926 80.6979 38.2379 80.6089L29.8229 75.7479C29.6686 75.6584 29.5405 75.5299 29.4513 75.3753C29.3622 75.2207 29.3151 75.0454 29.3149 74.8669V65.1439C29.3149 64.7819 29.5089 64.4459 29.8229 64.2639L38.2379 59.4069Z"
        fill="#83CD29"
      />
      <path
        d="M22.9299 65.0641C22.9299 64.6981 22.7379 64.3621 22.4219 64.1811L14.0069 59.3381C13.8656 59.2561 13.7062 59.2105 13.5429 59.2051H13.4559C13.2926 59.2106 13.1333 59.2563 12.9919 59.3381L4.57589 64.1811C4.42107 64.2707 4.29254 64.3995 4.2032 64.5544C4.11386 64.7094 4.06685 64.8852 4.06689 65.0641L4.08489 78.1041C4.08489 78.2861 4.17989 78.4551 4.33889 78.5431C4.41503 78.5892 4.50236 78.6136 4.59139 78.6136C4.68043 78.6136 4.76776 78.5892 4.84389 78.5431L9.84389 75.6791C10.1599 75.4911 10.3529 75.1601 10.3529 74.7971V68.7051C10.3529 68.3411 10.5449 68.0061 10.8599 67.8241L12.9899 66.5981C13.1438 66.5076 13.3193 66.4603 13.4979 66.4611C13.6719 66.4611 13.8499 66.5051 14.0049 66.5981L16.1329 67.8241C16.4479 68.0061 16.6419 68.3411 16.6419 68.7051V74.7971C16.6419 75.1601 16.8369 75.4931 17.1509 75.6791L22.1509 78.5431C22.228 78.5871 22.3153 78.6102 22.4041 78.61C22.4929 78.6098 22.5801 78.5863 22.657 78.5419C22.7339 78.4975 22.7978 78.4337 22.8423 78.3568C22.8869 78.28 22.9105 78.1929 22.9109 78.1041L22.9299 65.0641Z"
        fill="#404137"
      />
    </svg>
  );
};

export default nodejs;