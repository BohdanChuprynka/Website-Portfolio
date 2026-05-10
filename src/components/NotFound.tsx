import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NotFound.scss';

function NotFound() {
  return (
    <div className="not-found dark-mode">
      <div className="not-found-inner">
        <div className="nf-code">404</div>
        <h1>Page not found</h1>
        <p>This page doesn't exist or has moved.</p>
        <Link to="/" className="nf-back">← Back to portfolio</Link>
      </div>
    </div>
  );
}

export default NotFound;
