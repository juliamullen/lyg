import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";


const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <main>
      <table>
        <thead>
          <tr>
            {Object.entries(data[0]).map(el => <th key={key(el)}>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              {Object.entries(el).map(el => <td key={key(el)}>{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );

Table.propTypes = {
  data: PropTypes.array.isRequired
};

export default Table;
