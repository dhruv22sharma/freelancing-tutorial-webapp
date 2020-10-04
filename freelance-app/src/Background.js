import React,{useState} from 'react'
import "./Background.css"
import Product from './Product'
import SignIn from './SignIn'
import Register from './Register'
import AboutUs from './AboutUs.js'
import { Button } from '@material-ui/core'



function Background() {

    const [Sign, setSign] = useState(false);

    return (
        <div>
        
        <Button className="Button" onClick={()=>setSign(!Sign)}>Sign In/Register</Button>
        

        {Sign && <div className="SignIn_Register">
            <SignIn/>
            <Register/>
        </div>}

        <div className="h1">
        <div className="Row">
        <Product
            id="Learn NodeJS"
            price={40}
            rating={4}
            image="https://www.perfomatix.com/wp-content/uploads/2020/03/NodeJS-coding-standards-and-best-practices.jpg"/>
       <Product
            id="Learn React"
            price={30}
            rating={3}
            image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native-1200x675.png"/>
       <Product
            id="Learn AI/ML"
            price={149}
            rating={4}
            image="https://cdn-images-1.medium.com/max/182/1*EHmG8Qq8qdI0FdQ50WhwYQ@2x.jpeg"/>
       <Product
            id="Python: Zero to Hero"
            price={399}
            rating={5}
            image="https://qphs.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"/>
       
       </div>
       <div className="Row">
        <Product
            id="Learn NodeJS"
            price={40}
            rating={4}
            image="https://www.perfomatix.com/wp-content/uploads/2020/03/NodeJS-coding-standards-and-best-practices.jpg"/>
       <Product
            id="Learn React"
            price={30}
            rating={3}
            image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native-1200x675.png"/>
       <Product
            id="Learn AI/ML"
            price={149}
            rating={4}
            image="https://cdn-images-1.medium.com/max/182/1*EHmG8Qq8qdI0FdQ50WhwYQ@2x.jpeg"/>
       <Product
            id="Python: Zero to Hero"
            price={399}
            rating={5}
            image="https://qphs.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"/>
       
       </div><div className="Row">
        <Product
            id="Learn NodeJS"
            price={40}
            rating={4}
            image="https://www.perfomatix.com/wp-content/uploads/2020/03/NodeJS-coding-standards-and-best-practices.jpg"/>
       <Product
            id="Learn React"
            price={30}
            rating={3}
            image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native-1200x675.png"/>
       <Product
            id="Learn AI/ML"
            price={149}
            rating={4}
            image="https://cdn-images-1.medium.com/max/182/1*EHmG8Qq8qdI0FdQ50WhwYQ@2x.jpeg"/>
       <Product
            id="Python: Zero to Hero"
            price={399}
            rating={5}
            image="https://qphs.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"/>
       
       </div>
       <div className="Row">
        <Product
            id="Learn NodeJS"
            price={40}
            rating={4}
            image="https://www.perfomatix.com/wp-content/uploads/2020/03/NodeJS-coding-standards-and-best-practices.jpg"/>
       <Product
            id="Learn React"
            price={30}
            rating={3}
            image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native-1200x675.png"/>
       <Product
            id="Learn AI/ML"
            price={149}
            rating={4}
            image="https://cdn-images-1.medium.com/max/182/1*EHmG8Qq8qdI0FdQ50WhwYQ@2x.jpeg"/>
       <Product
            id="Python: Zero to Hero"
            price={399}
            rating={5}
            image="https://qphs.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"/>
       
       </div>
       <div className="Row">
        <Product
            id="Learn NodeJS"
            price={40}
            rating={4}
            image="https://www.perfomatix.com/wp-content/uploads/2020/03/NodeJS-coding-standards-and-best-practices.jpg"/>
       <Product
            id="Learn React"
            price={30}
            rating={3}
            image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native-1200x675.png"/>
       <Product
            id="Learn AI/ML"
            price={149}
            rating={4}
            image="https://cdn-images-1.medium.com/max/182/1*EHmG8Qq8qdI0FdQ50WhwYQ@2x.jpeg"/>
       <Product
            id="Python: Zero to Hero"
            price={399}
            rating={5}
            image="https://qphs.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"/>
       
       </div>
       <div className="Row">
        <Product
            id="Learn NodeJS"
            price={40}
            rating={4}
            image="https://www.perfomatix.com/wp-content/uploads/2020/03/NodeJS-coding-standards-and-best-practices.jpg"/>
       <Product
            id="Learn React"
            price={30}
            rating={3}
            image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native-1200x675.png"/>
       <Product
            id="Learn AI/ML"
            price={149}
            rating={4}
            image="https://cdn-images-1.medium.com/max/182/1*EHmG8Qq8qdI0FdQ50WhwYQ@2x.jpeg"/>
       <Product
            id="Python: Zero to Hero"
            price={399}
            rating={5}
            image="https://qphs.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"/>
       
       </div>
       <div className="Row">
        <Product
            id="Learn NodeJS"
            price={40}
            rating={4}
            image="https://www.perfomatix.com/wp-content/uploads/2020/03/NodeJS-coding-standards-and-best-practices.jpg"/>
       <Product
            id="Learn React"
            price={30}
            rating={3}
            image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native-1200x675.png"/>
       <Product
            id="Learn AI/ML"
            price={149}
            rating={4}
            image="https://cdn-images-1.medium.com/max/182/1*EHmG8Qq8qdI0FdQ50WhwYQ@2x.jpeg"/>
       <Product
            id="Python: Zero to Hero"
            price={399}
            rating={5}
            image="https://qphs.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"/>
       
       </div>
       <div className="Row">
        <Product
            id="Learn NodeJS"
            price={40}
            rating={4}
            image="https://www.perfomatix.com/wp-content/uploads/2020/03/NodeJS-coding-standards-and-best-practices.jpg"/>
       <Product
            id="Learn React"
            price={30}
            rating={3}
            image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native-1200x675.png"/>
       <Product
            id="Learn AI/ML"
            price={149}
            rating={4}
            image="https://cdn-images-1.medium.com/max/182/1*EHmG8Qq8qdI0FdQ50WhwYQ@2x.jpeg"/>
       <Product
            id="Python: Zero to Hero"
            price={399}
            rating={5}
            image="https://qphs.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"/>
       
       </div>
       <div className="Row">
        <Product
            id="Learn NodeJS"
            price={40}
            rating={4}
            image="https://www.perfomatix.com/wp-content/uploads/2020/03/NodeJS-coding-standards-and-best-practices.jpg"/>
       <Product
            id="Learn React"
            price={30}
            rating={3}
            image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native-1200x675.png"/>
       <Product
            id="Learn AI/ML"
            price={149}
            rating={4}
            image="https://cdn-images-1.medium.com/max/182/1*EHmG8Qq8qdI0FdQ50WhwYQ@2x.jpeg"/>
       <Product
            id="Python: Zero to Hero"
            price={399}
            rating={5}
            image="https://qphs.fs.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc"/>
       
       </div>
       
       </div>
       <AboutUs/>
       
       </div>
        
    )
}

export default Background
