import React from 'react';

function Content({access}) {
    return (
        <div className='content-height w-100 p-3'>
            {access.map((item, index) => {
                return (
                    <div className='mb-3' key={item.id + index}>{item.appConfig()}</div>
                )
            })}
        </div>
    );
}

export default Content;
