import { MaterialReactTable } from 'material-react-table'
import './DataGrid.css'
import { useMemo } from 'react'
import { userData } from '../../data/data'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { MRT_Localization_RU } from 'material-react-table/locales/ru';


const DataGrid = () => {

    const columns = useMemo(() => [
        {
            accessorKey: "name.firstName",
            header: 'Имя',
        },
        {
            accessorKey: "name.lastName",
            header: "Фамилия",
        }, 
        {
            accessorKey: "address",
            header: "Адрес",
        },
        {
            accessorKey: "city",
            header: "Город",
        },
        {
            accessorKey: "state",
            header: "Регион",
        },
    ], [])
    const theme = useMemo(() => createTheme({
        palette: {
            mode: "dark",
        }
    })
  )
  return (
    <div className="table-container">
        <ThemeProvider theme={theme}>
         <MaterialReactTable columns={columns} data={userData} localization={MRT_Localization_RU}/>
        </ThemeProvider>
    </div>
  )
}

export default DataGrid
