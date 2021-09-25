import {React,useEffect,useState} from 'react';
import { makeStyles, InputBase, ListItem,List} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme =>({
    search: {
        borderRadius: 2,
        backgroundColor:'#fff',
        marginLeft: 12,
        width: '25%',
        display:'flex',
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color:'blue',
      },
      inputRoot: {
        fontSize:'unset',
        width:'100%'
      },
      inputInput: {
        paddingLeft: 20,
      },
      list:{
        position:'absolute',
        color:'black',
        background:'white',
        marginTop:36
      }
}))

const SearchBar = () => {
    const classes = useStyle();
    // const [text,setText] = useState();

    // const [open, setOpen] = useState(true);

    // const getText = (text) =>{
    //   setText(text);
    //   setOpen(false);
    // }

    // const {products} = useSelector(state => state.getProducts);

    // const dispatch = useDispatch();
    
    // useEffect(()=>{
    //     dispatch(listProducts())
    // },[dispatch])

    return (
        <div className={classes.search}>
            <InputBase
              placeholder="Search for different courses.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              // onChange={(e)=> getText(e.target.value)}
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
            {/* {
              text && 
                 <List className={classes.list} hidden={open}> 
                   {
                     products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                        <ListItem>
                            <Link 
                              to={`/product/${product.id}`} 
                              style={{textDecoration:'none' , color:'inherit'}}
                              onClick={() => setOpen(true)}
                              >
                              { product.title.longTitle}
                            </Link>
                        </ListItem>
                     ))
                   }
                   
                 </List>
            } */}
          </div>
    )
}

export default SearchBar;