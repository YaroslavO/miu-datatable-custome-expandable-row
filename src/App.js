import logo from './logo.svg';
import './App.css';
import MUIDataTable from "mui-datatables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import {useState} from "react";

function App() {
    const [rowsExpanded, setRowsExpanded] = useState([]);
    const data = [
        ["Gabby George", "Business Analyst", "Minneapolis", 30, 100000],
        ["Business Analyst", "Business Consultant", "Dallas", 55, 200000],
        ["Jaden Collins", "Attorney", "Santa Ana", 27, 500000],
        ["Franky Rees", "Business Analyst", "St. Petersburg", 22, 50000],
        ["Aaren Rose", "Business Consultant", "Toledo", 28, 75000],
        ["Blake Duncan", "Business Management Analyst", "San Diego", 65, 94000],
        ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, 210000],
        ["Lane Wilson", "Commercial Specialist", "Omaha", 19, 65000],
        ["Robin Duncan", "Business Analyst", "Los Angeles", 20, 77000],
        ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, 135000],
        ["Harper White", "Attorney", "Pittsburgh", 52, 420000],
        ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, 150000],
        ["Frankie Long", "Industrial Analyst", "Austin", 31, 170000],
        ["Brynn Robbins", "Business Analyst", "Norfolk", 22, 90000],
        ["Justice Mann", "Business Consultant", "Chicago", 24, 133000],
        ["Addison Navarro", "Business Management Analyst", "New York", 50, 295000],
        ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000],
        ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000],
        ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000],
        ["Danny Leon", "Computer Scientist", "Newark", 60, 220000],
        ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000],
        ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000],
        ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000],
        ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000],
        ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000],
        ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000],
        ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000],
        ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000],
        [
            "Gabby Strickland",
            "Business Process Consultant",
            "Scottsdale",
            26,
            45000
        ],
        ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000]
    ];
    const toggleExpandRows = () => {
        setRowsExpanded(state => state.length ? [] : data.map((_, index) => index));
    };
    const toggleExpandRow = index => () => {
        setRowsExpanded(state => state.includes(index) ? state.filter(item => item !== index) : [...state, index]);
    };
    const columns = [
        {
            name: "Name"
        },
        {
            name: "Title"
        },
        {
            name: "Location"
        },
        {
            name: "Age"
        },
        {
            name: "Salary"
        },
        {
            name: 'expandable',
            options: {
                customHeadLabelRender: () => <IconButton onClick={toggleExpandRows}>{rowsExpanded.length ? <RemoveCircleIcon /> : <AddCircleIcon />}</IconButton>,
                customBodyRender: (_, { rowIndex }) => <IconButton onClick={toggleExpandRow(rowIndex)}>{rowsExpanded.includes(rowIndex) ? <RemoveCircleIcon /> : <AddCircleIcon />}</IconButton>,
                sort: false,
                filter: false
            }
        }
    ];

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
        createData("Eclair", 262, 16.0, 24, 6.0),
        createData("Cupcake", 305, 3.7, 67, 4.3),
        createData("Gingerbread", 356, 16.0, 49, 3.9)
    ];

    const options = {
        rowsPerPage: 10,
        rowsExpanded,
        expandableRows: true,
        renderExpandableRow: (rowData, rowMeta) => {
            return (
                <>
                    <tr>
                        <td colSpan={7}>
                            <TableContainer component={Paper}>
                                <Table style={{ minWidth: "650" }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7}>
                            <TableContainer component={Paper}>
                                <Table style={{ minWidth: "650" }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell align="right">Calories</TableCell>
                                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </td>
                    </tr>
                </>
            );
        },
        page: 1
    };

  return (
    <div className="App">
      <header className="App-header">
          <MUIDataTable
              title={"ACME Employee list"}
              data={data}
              columns={columns}
              options={options}
              components={{ExpandButton: () => <div />}}
          />
      </header>
    </div>
  );
}

export default App;
