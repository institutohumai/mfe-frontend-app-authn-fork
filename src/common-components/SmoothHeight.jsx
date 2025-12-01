import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const SmoothHeight = ({ children, className }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    if (!contentRef.current || typeof ResizeObserver === 'undefined') return undefined;

    const resizeObserver = new ResizeObserver((entries) => {
      // We wrap this in requestAnimationFrame to avoid "ResizeObserver loop limit exceeded"
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        if (contentRef.current) {
          setHeight(contentRef.current.offsetHeight);
        }
      });
    });

    resizeObserver.observe(contentRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        height,
        transition: 'height 0.3s ease-in-out',
        overflow: 'hidden',
      }}
    >
      <div ref={contentRef} style={{ display: 'flow-root', padding: '1px' }}>
        {children}
      </div>
    </div>
  );
};

SmoothHeight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SmoothHeight.defaultProps = {
  className: '',
};

export default SmoothHeight;
