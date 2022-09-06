import React from 'react';
import './Table.css';
import {useTable} from 'react-table';
import styled from 'styled-components';

import dataArr from './tableData';

const Styles = styled.div`
  padding: auto;

  table {
    border-spacing: 8px;
    border: none;
    font-weight: bold;
    text-align: jusify;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th{
      margin: 0;
      padding: 25px;
      border-bottom: 1px solid black;
      border-right: 1px 1px 1px 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
    td {
      border: none;
      margin: 12px;
    }
  }
`

function Tabled({columns, data}){
	const{
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	})

	return(
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th {...column.getHeaderProps()}>
								{column.render('Header')}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row)
					return(
						<tr {...row.getRowProps()}>
							{row.cells.map(cell => {
								return <td {...cell.getCellProps()}>
									{cell.render('Cell')}
								</td>
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

function Table() {
	const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
    []
  )

  const data = React.useMemo(() => dataArr, []);

  return (
    <Styles>
			<Tabled columns={columns} data={data} />
		</Styles>
  );
}

export default Table;