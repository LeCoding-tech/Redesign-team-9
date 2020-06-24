import React from 'react';
import HomeApplianceCard from '../ProductCards/HomeAppliancesCard';
import HomeApplianceData from '../ProductsJsonFiles/HomeAppliances.json';
import '../productsBody.css';


const initialState = {
    products: HomeApplianceData,
    search: null
  }
  // this.state is our brain
  class HomeAppliancePage extends React.Component {

    constructor() {
      super()
      this.state = initialState
    }



  filterProducts =(evt) => {
    let value = evt.target.value

    // makes a new array for all products
    const allProducts =  [...initialState.products]
      if (value === "All"){
        this.setState({products: allProducts})
        return
      }
      // makes a new array for product availability
      //filters by category
    const filterProducts = allProducts.filter(product => {
      return product.category === value
    })
    // only products that we filter
    this.setState({products: filterProducts})
  };


  filterPrice =(evt) => {
    let value = evt.target.value

    // makes a new array for product availability
    const allProducts =  [...initialState.products]
      if (value === "All"){
        this.setState({products: allProducts})
        return
      }
      //filters by price
    const filterPrice = allProducts.filter(product => {
      if (value)
      return product.priceRange === value
    })
    // only products that we filter
    this.setState({products: filterPrice})
  };


  searchSpace=(evt)=>{
    let keyword = evt.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingLeft:'100px',
    }

    const elementStyle ={
      border:'solid 2px',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'60vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }


  var mappedProducts = this.state.products.map(product => {
      return <HomeApplianceCard name={product.productname} price={product.price} description={product.description} image={product.image} />
  })


  var items = HomeApplianceData.filter((HomeApplianceData)=>{
          if(this.state.search == null)
              return HomeApplianceData
          else if(HomeApplianceData.productname.toLowerCase().includes(this.state.search.toLowerCase()) || HomeApplianceData.description.toLowerCase().includes(this.state.search.toLowerCase())){
              return HomeApplianceData
          }
        })
        .map(HomeApplianceData=>{
          return <HomeApplianceCard name={HomeApplianceData.productname} price={HomeApplianceData.price} description={HomeApplianceData.description} image={HomeApplianceData.image} />
        })

      return (

   <div>

     <h1 >Home Appliances</h1>

    <div className="ProductsContainer">
      <div>

      <h3>Search within our Galaxy</h3>
     <input
      type="text"
      placeholder="Enter item to be searched"
      style={elementStyle}
      onChange={(e)=>this.searchSpace(e)} />

      </div>
        <div className="filtersContainer">
        <p>Shop by Category</p>
        <select className="Selectfilters" onChange={evt => this.filterProducts(evt)} >
                <option value="All">All Types</option>
                <option value="Dishwasher">Dishwasher</option>
                <option value="Laundry">Laundry</option>
                <option value="Microwave">Microwave</option>
                 <option value="Ranges">Ranges</option>
                 <option value="Refrigerator">Refrigerator</option>

        </select>
        <p>Shop By Price </p>
        <select className="Selectfilters" onChange={evt => this.filterPrice(evt)} >
                <option value="All">All Prices</option>
                <option value="1.00-299.99">$1.00-$299.99</option>
                <option value="300.00-599.99">$300.00-$599.999</option>
                <option value="600.00-1499.99">$600.00-$1499.99</option>
                <option value="1500.00-2999.99">$1500.00-$2999.99</option>
        </select>
        </div>

     <div className= "container">
     {this.state.search != null ? items : mappedProducts}
    </div>
    </div>
    </div>
  );
  }
  }

  export default HomeAppliancePage ;