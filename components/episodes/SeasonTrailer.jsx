import YouTube from 'react-youtube';
import { getTrailerID } from '@/functions/dataFormatting';
import { getVideoSize } from '@/functions/adaptiveLayoutFunctions';
import { TRAILERS } from '@/constants';

import styles from '@/public/styles/episodes/SeasonTrailer.module.scss';

const SeasonTrailer = ({ season }) => {
  const windowWidth =
    document.documentElement.clientWidth || document.body.clientWidth;

  const youtubeOpts = {
    width: getVideoSize(windowWidth).width?.toString(),
    height: getVideoSize(windowWidth).height?.toString(),
  };

  return (
    <div className={styles.trailer}>
      <h2>Season trailer video</h2>
      <YouTube videoId={getTrailerID(season, TRAILERS)} opts={youtubeOpts} />
    </div>
  );
};

export default SeasonTrailer;
