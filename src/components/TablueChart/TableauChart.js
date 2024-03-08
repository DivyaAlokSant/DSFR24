import React, { useEffect } from 'react';

const TableauChart = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1709882874754');
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '106%';
    vizElement.style.height = (divElement.offsetWidth * 0.64) + 'px';

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    return () => {
      // Clean up any resources or subscriptions here
    };
  }, []);

  return (
    <div className='tableauPlaceholder' id='viz1709882874754' style={{ position: 'relative' }}>
      <noscript>
        <a href='#'>
          <img alt=' ' src='https://public.tableau.com/static/images/sf/sfrchart1/Sheet1/1_rss.png' style={{ border: 'none' }} />
        </a>
      </noscript>
      <object className='tableauViz' style={{ display: 'none' }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='sfrchart1/Sheet1' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/sf/sfrchart1/Sheet1/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
      </object>
    </div>
  );
};

export default TableauChart;
