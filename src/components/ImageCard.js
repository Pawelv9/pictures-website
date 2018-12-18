import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props) {
      super(props);
      
      this.state = { spans: 0 }
      
      this.imageRef = React.createRef();
    }
  
    componentDidMount() {
        // console.log(this.imageRef.current.clientHeight);
        // console.log(this.state.spans);
      this.imageRef.current.addEventListener('load', this.setSpans);
    }
    
    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil( height / 10 + 0.1 );
        // const spans = height / 10
    //   console.log(spans)
      this.setState({ spans });
        // console.log(spans)
    }
  

    render() {
      const { description, urls } = this.props.image;
    
    //   console.log(this.state.spans)
      return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular}/>        
      </div>
    );
  }
} 

export default ImageCard;