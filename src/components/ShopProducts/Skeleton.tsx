import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={288}
    height={490}
    viewBox="0 0 288 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="254" height="327" />
    <rect x="0" y="344" rx="10" ry="10" width="183" height="20" />
    <rect x="0" y="385" rx="10" ry="10" width="181" height="34" />
    <rect x="0" y="437" rx="10" ry="10" width="55" height="30" />
  </ContentLoader>
);

export default Skeleton;
