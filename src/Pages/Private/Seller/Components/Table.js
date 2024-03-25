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

const StyledTableCell = styled(TableCell)(({ width, cartTotal, column }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "transparent",
        color: "var(--black)",
        // borderRight: "0.5px solid var(--gray-200)",
        borderBottom: "none",
        fontSize: "16px",
        textAlign: cartTotal ? "start" : "start",
        width: column?.width || "fit-content",
        maxWidth: width
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: "1rem",
        backgroundColor: "transparent",
        padding: "1rem",
        whiteSpace: "normal",
        wordWrap: "break-word",
        textAlign: "start",
        width: column?.width || "fit-content"
    },
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "transparent",
    },
    // hide last border
    '& td, & th': {
        // borderRight: "0.2px solid var(--gray-200)",
        borderBottom: "1px solid var(--gray-200)",
        // borderLeft: "1px solid var(--gray-200)",

    },

}));


const TableContainer = styled('div')(({ tableWidth }) => ({
    overflowX: 'auto',
    width: '100%',
    height: "auto",
    borderBottom: '1px solid var(--gray-200)',
    '& table': {
        minWidth: '100%',
        tableLayout: 'fixed',
    },
}));
export const SellerTable = ({
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
                                column={column}
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
                    {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
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
                    count={data?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            }

        </TableContainer>
    );
};