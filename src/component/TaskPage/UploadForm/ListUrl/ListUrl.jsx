import React from 'react';
import T from 'prop-types';

const ListUrl = (props) => {
  console.log(props);
  return (
    <div>

      <ul>
        {
          props.data.map(item => (
            <li key={item}>
              <a href={item}>{item}</a>
            </li>
          ))

        }
      </ul>
    </div>
  );
};

ListUrl.propTypes = {
  data: T.arrayOf(T.string)
};
export default ListUrl;
