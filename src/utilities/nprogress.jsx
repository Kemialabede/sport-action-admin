import nProgress from 'nprogress';

const NProgress = ({ children }) => {
  nProgress.configure({
    easing: 'ease',
    speed: 500,
  });

  return children;
};

export default NProgress;
