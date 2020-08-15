import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "fecha", label: "Fecha", minWidth: 100},
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "service",
    label: "Service",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US")
  }
];

function createData(fecha, name, description, service) {
  return { fecha, name, description, service};
}

const rows = [
  createData("16/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("16/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("16/01/2020", "Empresa de Construcción", "ADQUISICIÓN DE BOLSAS DE CEMENTO PORTLAND", 'Bolsas'),
  createData("15/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("15/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("15/01/2020", "Empresa de Construcción", "ADQUISICIÓN DE BOLSAS DE CEMENTO PORTLAND","Consultoría de obra"),
  createData("14/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("14/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("14/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("13/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("13/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("13/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("12/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("12/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra"),
  createData("12/01/2020", "Empresa de Supervisión", "CONTRATACIÓN DE SERVICIO DE SUPERVISIÓN PARA LA OBRA", "Consultoría de obra")
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

export default function Demo() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
