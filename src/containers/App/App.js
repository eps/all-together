import React from 'react';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
// import axios from 'axios';
import styles from './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   const devToken = '4749186aeaf490a8ef0d03677a081245d300de9797c5affeadaed87cc6afc611';
  //
  //   axios.get(`http://www.reddit.com/r/popular.json`)
  //     .then(res => {
  //       const data = res.data.data.children.map(obj => obj.data);
  //       this.setState({ reddit : data });
  //     })
  //     .catch(error => console.log(error, "ERROR"))
  //
  //   axios.get('https://api.producthunt.com/v1/posts', {
  //     headers: { 'Authorization': 'Bearer'+` ${devToken}` }
  //     })
  //     .then(res => {
  //       const post = res.data.posts;
  //       this.setState({ productHunt : post });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {

    return (
      <div className={styles.container}>
        <SideBarSection />
      </div>
    );
  }
}


export default App;
