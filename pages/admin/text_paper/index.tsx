import withAuth from "@/components/admin/withAuth";
import { NextPage } from "next/types";
import React, { useState } from "react";
import { appDispatch, appSelector } from "@/store/hooks";
import Layout from "@/components/admin/Layout/Layout";
import { Button, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Toolbar from "@mui/material/Toolbar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";
import router from "next/router";
// Table
import { getComparator, stableSort, Order } from "@/components/table/Table";
import {
  EnhancedTableHead,
  EnhancedTableToolbarProps,
} from "@/components/table/admin/text_paper/TableHeads";
import {
  getTextPaper,
  deleteTextPaper,
  deleteAllTextPaper,
} from "@/features/admin/text_paper";
import saveAsExcel from "@/features/admin/text_paper/export";

const Text_Paper: NextPage = () => {
  const dispatch = appDispatch();
  const [searched, setSearched] = React.useState<string>("");
  const { data } = appSelector((state) => state.text_paper);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<any>("");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  var rows: any = data ?? [];

  // *************************** Use Effect ***************************
  React.useEffect(() => {
    dispatch(getTextPaper(""));
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getTextPaper(searched));
  }, [dispatch, searched]);
  // *************************** Use Effect ***************************

  // *************************** Action ***************************
  const Delete = (id: any) => {
    Swal.fire({
      title: "Are you sure to delete the selected item(s) ?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result: any) => {
      setSelected([]);
      if (result.isConfirmed) {
        let data = new FormData();
        data.append("text_id", id);
        Swal.fire("Deleted!", "Your data has been deleted.", "success").then(
          function () {
            dispatch(deleteTextPaper(data)).then((result: any) => {
              dispatch(getTextPaper(""));
            });
          }
        );
      }
    });
  };
  const DeleteAll = (id: any) => {
    Swal.fire({
      title: "Are you sure to delete the selected item(s) ?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result: any) => {
      setSelected([]);
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your data has been deleted.", "success").then(
          function () {
            dispatch(deleteAllTextPaper(id)).then((result: any) => {
              if (result.payload.status == "success") {
                dispatch(getTextPaper(""));
              }
            });
          }
        );
      }
    });
  };

  const exports = () => {
    saveAsExcel({ rows });
  };
  // *************************** Action ***************************

  // *************************** Fix Table ***************************

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: any) => n.text_id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected, valSelected } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Text Paper
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton color="error" onClick={() => DeleteAll(valSelected)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="">
            <IconButton></IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }
  // *************************** Fix Table ***************************
  return (
    <Layout>
      <TextField
        fullWidth
        value={searched}
        label="Search..."
        onChange={(e: React.ChangeEvent<any>) => {
          e.preventDefault();
          setSearched(e.target.value);
        }}
      />

      <Box sx={{ width: "100%", mt: 3 }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            valSelected={selected}
          />
          <Button
            sx={{ ml: 2, mb: 1 }}
            variant="contained"
            color="primary"
            onClick={() => router.push("/admin/text_paper/add")}
          >
            Add Text Paper
          </Button>

          <Button
            sx={{ ml: 2, mb: 1 }}
            variant="contained"
            color="secondary"
            onClick={() => router.push("/admin/text_paper/upload")}
          >
            Upload Text Paper By Excel
          </Button>

          <Button
            sx={{ ml: 2, mb: 1, flexGrow: 1 }}
            onClick={exports}
            variant="contained"
            color="success"
          >
            Export to Excel
          </Button>

          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {rows.length > 0
                  ? stableSort(rows, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row: any, index) => {
                        const isItemSelected = isSelected(row.text_id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.text_id)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.text_id}
                            selected={isItemSelected}
                          >
                            <TableCell padding="checkbox" align="center">
                              <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{
                                  "aria-labelledby": labelId,
                                }}
                              />
                            </TableCell>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell align="center">
                              {row.text_name}
                            </TableCell>
                            <TableCell align="center">
                              <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                                spacing={0}
                              >
                                <IconButton
                                  color="primary"
                                  aria-label="edit"
                                  size="large"
                                  onClick={() =>
                                    router.push(
                                      `/admin/text_paper/edit?id=${row.text_id}`
                                    )
                                  }
                                >
                                  <EditIcon fontSize="inherit" />
                                </IconButton>

                                <IconButton
                                  color="error"
                                  aria-label="delete"
                                  size="large"
                                  onClick={() => Delete(row.text_id)}
                                >
                                  <DeleteIcon fontSize="inherit" />
                                </IconButton>
                              </Stack>
                            </TableCell>
                          </TableRow>
                        );
                      })
                  : ""}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[
              { label: "10", value: 10 },
              { label: "20", value: 20 },
              { label: "30", value: 30 },
              { label: "All", value: rows.length },
            ]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Layout>
  );
};

// export const getStaticProps: any = wrapper.getStaticProps(
//   (store) => async () => {
//     const data: any = await store.dispatch(getUser());
//     console.log(data);
//     return {
//       props: {
//         initData: data.payload,
//       },
//     };
//   }
// );

export default withAuth(Text_Paper);
