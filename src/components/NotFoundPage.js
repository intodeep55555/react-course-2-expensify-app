import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage=()=>(
  <div>
    {/* function of react router */}
    404! - <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
