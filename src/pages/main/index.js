import React, { Component } from 'react'

import api from '../../services/api'

import './styles.css'


export default class Main extends Component {
  state = {
    products: []
  }


  componentDidMount() {
    this.loadProducts()   // THIS referencia a classe MAIN onde tem a func que criamos
  }

  loadProducts = async () => {
    const response = await api.get('/products')

    this.setState({ products: response.data.docs })

    console.log(this.state)
  }

  render() {
    return (
      <div className="product-list">
        {this.state.products.map(product => {
          return <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a href="">Details</a>
            </article>
        })}
      </div>

    )
  }
}