import TravelJornal from './components/TravelJornal'
import Header from './components/Header';
import  Data  from './Data';
import './App.css';

function App() {
  const PostsData = Data.map( PostData => {
    console.log(PostData.imageUrl)
    return(
       <TravelJornal 
          key= {PostData.id}
          title= {PostData.title}
          loImg= {PostData.locationIcon}
          image= {PostData.imageUrl}
          location= {PostData.location}
          hr = {PostData.hr}
          startDate= {PostData.startDate}
          endDate= {PostData.endDate}
          description= {PostData.description}
       />
    )
  })
  
  return (
    <div className="App">
      <Header />
      {PostsData}
    </div>
  );
}

export default App;
