import React ,{useState , useEffect} from 'react';
import Header from '../header/Header';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './EventPage.css'
import Card from '../Card/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
  formControl: {
    
    minWidth:150,
    // marginLeft:"2rem"
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  table: {
    // maxWidth:"400px"
    fontSize:"1.2rem"
  },
  style_key:{
    border:0
}
  
}));


const EventPage = props => {
    const [state, setState] = useState('2021')
    const [data , setdata] = useState([]);
    const history = useHistory()
    const classes = useStyles();
    const [loading , setloading] = useState(true)
    const handleChange = (event) => {
        setState(event.target.value);
      };

      const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          // paddingLeft:"3rem",
          // paddingRight:"3rem"
        },
        body: {
          fontSize: "1.2rem",
          fontWeight:"600"
          // paddingLeft:"3rem",
          // paddingRight:"3rem"
        }
        
      
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];


      useEffect(() => {

        var currentyear = new Date().getFullYear();
        

        var select = document.getElementById('outlined-age-native-simple')
    
            while(select.firstChild)
        {
            select.removeChild(select.lastChild);
        }
        
        for(let i = currentyear; i>=2013;i--)
        {
    
        
        let option = document.createElement("option");
        option.text = i.toString();
        option.value = i;
        select.appendChild(option)
        }
        } ,[]);

        useEffect(() => {
            setdata([])
            setloading(true)
            axios.get(`http://billiardsports.in/api/event/year/?year=${state}`)
            .then((res)=> 
            {setdata(res.data.data)
            setloading(false)})
            .catch((e)=> console.log(e))

        },[state])


    return (
        <div>
            {/* <h1>Event Page</h1> */}
            <Header active="events"/>
            <div className="news-gallery" style={{maxWidth:"1400px" , padding:"2rem"   ,marginLeft:"auto" , marginRight:"auto"}}>
    
    <h1> IBSF Events</h1>
<div className="news-gallery-search_bar">
<FormControl className="news_gallery" variant="outlined" className={classes.formControl} >
    <InputLabel  className="news_gallery-input-label"  htmlFor="outlined-year-native-simple">Year</InputLabel>
    <Select
      native
      className="input-label-select"
      value={state}
      onChange={handleChange}
      label="Year"
      inputProps={{
        name: 'year',
        id: 'outlined-age-native-simple',
      }}
    >

<option className="input-label-option"   value="all" >All</option>
    </Select>
  </FormControl>

  
  <p>Events in the <span style={{color:"#0da1ff"}}>{state}</span> year are -</p>
  <br></br>

  {
  data.length!=0 ?
  <>
  <TableContainer style={{borderRadius:"0" , maxWidth:"75rem" , margin:"auto"}} component={Paper}>
      <Table className={classes.table}  stickyHeader aria-label="sticky table">
        <TableHead>
            <TableRow>
            <StyledTableCell align="center" style={{fontSize:"1.2rem"  ,width:"2rem"}}>S.No</StyledTableCell>
            <StyledTableCell align="center" style={{fontSize:"1.2rem" , width:"20rem"}}>Date</StyledTableCell>
            <StyledTableCell align="left"  style={{fontSize:"1.2rem" , maxWidth:"10rem"}} >Event</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row , index) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell align="center" className={classes.style_key} style = {index%2?{background:"rgb(13, 161, 255 , 0.8)" , color:"white"}:{background:"rgb(13, 161, 255 )" , color:"white"}}>
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.start_date}
              </StyledTableCell>
              <StyledTableCell className="hoverable_title" align="left" onClick={()=>history.push(`/events/${row.id}/${props.slug}`)}>{row.name}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.calories}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
    :<>
    {
      loading?<div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <p><CircularProgress/></p> </div>:
      <div id="loader" style={{width:"100%" ,  textAlign:"center" }}> <h4>Nothing Found...</h4> </div>
    }
    </>
          }

</div>
        </div>

          
        </div>
    );
    
};



export default EventPage;