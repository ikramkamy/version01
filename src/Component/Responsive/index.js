import useMediaQuery from '@material-ui/core/useMediaQuery';

import './responsive.css';
export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>
      
      <div className="test-responsive"> this is for  testing</div>
      
      
      {`(min-width:600px) matches: ${matches}`}
      
      
      
      </span>;
}