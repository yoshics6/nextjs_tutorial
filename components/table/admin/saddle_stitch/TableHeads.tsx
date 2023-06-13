import { Order } from "@/components/table/Table";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";

export interface HeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
  valSelected: any;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "s_type",
    numeric: false,
    disablePadding: true,
    label: "Type",
  },
  {
    id: "s_finished_size",
    numeric: false,
    disablePadding: true,
    label: "Finished Size",
  },
  {
    id: "s_cover",
    numeric: false,
    disablePadding: true,
    label: "Cover",
  },
  {
    id: "s_text",
    numeric: false,
    disablePadding: true,
    label: "Text",
  },
  {
    id: "s_cover_paper",
    numeric: false,
    disablePadding: true,
    label: "Cover Paper",
  },
  {
    id: "s_text_paper",
    numeric: false,
    disablePadding: true,
    label: "Text Paper",
  },
  {
    id: "s_printing",
    numeric: false,
    disablePadding: true,
    label: "Printing",
  },
  {
    id: "s_cover_coating",
    numeric: false,
    disablePadding: true,
    label: "Cover Coating",
  },
  {
    id: "s_text_coating",
    numeric: false,
    disablePadding: true,
    label: "Text Coating",
  },
  {
    id: "s_1000",
    numeric: false,
    disablePadding: true,
    label: "1000",
  },
  {
    id: "s_2000",
    numeric: false,
    disablePadding: true,
    label: "2000",
  },
  {
    id: "s_3000",
    numeric: false,
    disablePadding: true,
    label: "3000",
  },
  {
    id: "s_4000",
    numeric: false,
    disablePadding: true,
    label: "4000",
  },
  {
    id: "s_5000",
    numeric: false,
    disablePadding: true,
    label: "5000",
  },
  {
    id: "-",
    numeric: false,
    disablePadding: true,
    label: "Action",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof any
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export function EnhancedTableHead(props: EnhancedTableProps) {
  let {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof any) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" align="center">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={"none"}
            sx={{ fontWeight: "bold" }}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
