// import {
//     Paper,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TablePagination,
//     TableRow
// } from "@mui/material";
// import { useState } from "react";

// export const GTable = () => {
//     const columns = [
//         { id: 'id', name: 'Id' },
//         { id: 'name', name: 'Name' },
//         { id: 'email', name: 'Email' },
//         { id: 'phone', name: 'Phone' }
//     ]

//     const handlechangepage = (event, newpage) => {
//         pagechange(newpage)
//     }
//     const handleRowsPerPage = (event) => {
//         rowperpagechange(+event.target.value)
//         pagechange(0);
//     }

//     const [rows, rowchange] = useState([]);
//     const [page, pagechange] = useState(0);
//     const [rowperpage, rowperpagechange] = useState(5);


//     return (
//         <div style={{ textAlign: 'center' }}>
//             <Paper sx={{ width: '90%', marginLeft: '5%' }}>
//                 <TableContainer sx={{maxHeight:450}}>
//                     <Table stickyHeader>
//                         <TableHead>
//                             <TableRow>
//                                 {columns.map((column) => (
//                                     <TableCell style={{ backgroundColor: "var(--gray-200)", color: 'white' }} key={column.id}>{column.name}</TableCell>
//                                 ))}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rows && rows
//                                 .slice(page * rowperpage, page * rowperpage + rowperpage)
//                                 .map((row, i) => {
//                                     return (
//                                         <TableRow key={i}>
//                                             {columns && columns.map((column, i) => {
//                                                 let value = row[column.id];
//                                                 return (
//                                                     <TableCell key={value}>
//                                                         {value}
//                                                     </TableCell>
//                                                 )
//                                             })}
//                                         </TableRow>
//                                     )
//                                 })}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <TablePagination
//                     rowsPerPageOptions={[5, 10, 25]}
//                     rowsPerPage={rowperpage}
//                     page={page}
//                     count={rows.length}
//                     component="div"
//                     onPageChange={handlechangepage}
//                     onRowsPerPageChange={handleRowsPerPage}

//                 >

//                 </TablePagination>
//             </Paper>

//         </div>
//     );
// }


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ width, cartTotal }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "var(--table-yellow)",
        color: "var(--black)",
        borderRight: "0.5px solid var(--gray-200)",
        borderBottom: "none",
        fontSize: "1rem",
        textAlign: cartTotal ? "start" : "center",
        width: width || "fit-content"
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: "1rem",
        backgroundColor: "transparent",
        padding: "1rem",
        whiteSpace: "nowrap",
        textAlign: "center"

    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "transparent",
    },
    // hide last border
    '& td, & th': {
        borderRight: "0.2px solid var(--gray-200)",
        borderBottom: "1px solid var(--gray-200)",
        // borderLeft: "1px solid var(--gray-200)",

    },

}));


const TableContainer = styled('div')(({ tableWidth }) => ({
    overflowX: 'auto',
    width: tableWidth || 'auto',
    // minHeight: '60vh',
    height: "auto",
    borderBottom: '1px solid var(--gray-200)',
    borderRight: '0.5px solid var(--gray-200)',
    borderLeft: '0.5px solid var(--gray-200)',
}));

export const GTable = ({
    columns,
    data,
    tableWidth,
    cartTotal,
    cellWidth,
    pagination
}) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer
            tableWidth={tableWidth}
        >
            <Table
                sx={{ minWidth: tableWidth || 700 }}
                stickyHeader
                aria-label="customized table"
            >
                <TableHead>
                    <StyledTableRow>
                        {columns?.map((column, index) => (
                            <StyledTableCell
                                key={index}
                                width={cellWidth}
                                cartTotal={cartTotal}
                            >
                                {typeof column.Header === 'string' ? (
                                    <span>{column.Header}</span>
                                ) : (
                                    column.Header()
                                )}
                            </StyledTableCell>
                        ))}
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <StyledTableCell key={colIndex}>
                                    {column.Cell ? (
                                        <column.Cell row={row} />
                                    ) : (
                                        row[column.accessor]
                                    )}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>

            {
                pagination &&
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            }

        </TableContainer>
    );
};