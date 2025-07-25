import react from "react";
import products from "./data/Seed";
import 'bootstrap-icons/font/bootstrap-icons.css'

class ProductList extends react.Component {

  state = {
    productsState: [],
  }

  componentDidMount() {
    this.setState({ productsState: products })
  }

  handleProductUpVote = (productId) => {
    const updatedProductState = this.state.productsState.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        });
      } else {
        return product
      }
    })

    this.setState({ productsState: updatedProductState })
  }

  handleProductDownVote = (productId) => {
    const updatedProductState = this.state.productsState.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes - 1
        });
      } else {
        return product
      }
    })

    this.setState({ productsState: updatedProductState })
  }

  render() {

    const sortedProducts = this.state.productsState.sort((a, b) => (
      b.votes - a.votes
    ));

    const productComponents = sortedProducts.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onUpVote={this.handleProductUpVote}
        onDownVote={this.handleProductDownVote}
      />
    ));

    return (
      <div className='Container'>
        <h1 className='text-center'>Products</h1>
        {productComponents}
      </div>
    );
  }
}

class Product extends react.Component {

  handleUpVote = () => (
    this.props.onUpVote(this.props.id)
  )

  handleDownVote = () => (
    this.props.onDownVote(this.props.id)
  )

  render() {
    return (
      <div className='row'>
        <div className='col-5 image'>
          <img 
          className='rounded float-end'
            src={this.props.productImageUrl}
            width='200px'
            alt="item"
          />
        </div>
        <div className='col-7'>
          <div className='description'>
            <a href={this.props.url} >{this.props.title}</a>
            <p className='h5'>{this.props.description}</p>
          </div>
          <div className='extra'>
            <span className='lead'>Submitted by: </span>
            <img
              className='rounded image'
              src={this.props.submitterAvatarUrl}
              width='20px'
              height='20px'
              alt="submitter"
            />
          </div>
          <div className='vote'>
            <p>Votes: {this.props.votes}</p>
            <div className='row'>
              <div className='col'>
              <button onClick={this.handleUpVote} className='btn btn-outline-primary '><i className="bi bi-hand-thumbs-up"></i></button>
              <button onClick={this.handleDownVote} className='btn btn-outline-danger '><i className="bi bi-hand-thumbs-down"></i></button>
              </div>
            </div>
          </div>
          <br/>
        </div>
        <hr />
        <br />
      </div>

    );
  }
}
export default ProductList;