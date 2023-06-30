import './DataTable.css';

/*
This component renders the table for the Public APIs
*/
const DataTable = ({ currentEntries, handleSort, sortColumn }) => (
  <table>
    <thead>
      <tr>
        <th
          className={sortColumn === 'API' ? 'selected' : ''}
          onClick={() => handleSort('API')} >
          API
        </th>
        <th
          className={sortColumn === 'Description' ? 'selected' : ''}
          onClick={() => handleSort('Description')} >
          Description
        </th>
        <th
          className={sortColumn === 'Auth' ? 'selected' : ''}
          onClick={() => handleSort('Auth')} >
          Auth
        </th>
        <th
          className={sortColumn === 'HTTPS' ? 'selected' : ''}
          onClick={() => handleSort('HTTPS')} >
          HTTPS
        </th>
        <th
          className={sortColumn === 'Cors' ? 'selected' : ''}
          onClick={() => handleSort('Cors')} >
          Cors
        </th>
        <th
          className={sortColumn === 'Link' ? 'selected' : ''}
          onClick={() => handleSort('Link')} >
          Link
        </th>
        <th
          className={sortColumn === 'Category' ? 'selected' : ''}
          onClick={() => handleSort('Category')} >
          Category
        </th>
      </tr>
    </thead>
    <tbody>
      {currentEntries.map((entry) => (
        <tr key={`${entry.API}-${entry.Link}`}>
          <td>{entry.API}</td>
          <td>{entry.Description}</td>
          <td>{entry.Auth}</td>
          <td>{entry.HTTPS.toString()}</td>
          <td>{entry.Cors}</td>
          <td> <a href={entry.Link}>{entry.Link}</a></td>
          <td>{entry.Category}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
