import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap'
import GridList from '@material-ui/core/GridList';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";


class ListAllCocktails extends Component{
    constructor(arg){
        super(arg);
        this.state = {
            items:[],
            isLoaded: false
        };
    }

    componentDidMount(){
      fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
          .then(res=> res.json())
          .then(({ drinks }) => {
              this.setState({
                  isLoaded: true,
                  items: drinks,
              })
          });
  }
  state = {
    color: 'red'
  }
  imageClick = () => {
    console.log('Click');
  }     
  onChange = () => {
    this.setState({ color: 'green' });
 }

    render(){
        const {isLoaded, items} = this.state;
        if(!isLoaded){
            return <div>loading data...</div>;
        }

        else{           

            return(
               <div>
                 <Container>
                 <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                    align="center"
                  >
          Popular Drinks{" "}
        </Typography>
                 <Card>
                <div className="Data">
                  {/* <GridList> */}
                    <div>
                    <Grid container spacing = {3}>
                      {/* <GridList className = "container"> */}
                        {items.map(item=>(
                         
          
                           
                            <Card key={item.id}>
                                <CardMedia color = "primary" img src={item.strDrinkThumb} >
                                <img src={item.strDrinkThumb}width = "100" height = "100" onClick={this.imageClick} />
                                <br/>
                                 
                                <CardContent>
                                  <Typography color ="primary">
                                    
                                    </Typography>
                                <Typography color="primary"  noWrap = "false" overflowWrap ="break-word" word-break = "break-all">
                                {/* <div style={{ backgroundColor: item.strCategory }} */}
                               
                                 
                                 <a href={item.strCategory} onClick={this.onChange}>{item.strCategory}</a>
                                 {/* </div> */}
                               
                              </Typography>
                              <Typography color="textSecondary" variant="subtitle2" overflowWrap ="break-word" word-break = "break-all">
                              {item.strdrink +' '+ item.strInstructionsDE +' '} 
                              </Typography>
                              <Typography color="textSecondary" variant="subtitle2" overflowWrap ="break-word" word-break = "break-all">
                              {item.idDrink}<br />
                              </Typography>
                              <Typography color="textSecondary" variant="subtitle2" overflowWrap ="break-word" word-break = "break-all">
                              {item.dateModified} <br />
                              </Typography>
                                 
                                 </CardContent>
                                 <CardActions>
                                  {/* <Button size="small" onClick="/home">{item.strCategory}</Button> */}
                                </CardActions>
                                 </CardMedia>   

                            </Card>     
                        ))};
                        {/* </GridList> */}
                        </Grid>
                      
                    </div>
                 
                </div>
                </Card>
                </Container>
                </div>
            );
        }

    }

}

export default ListAllCocktails