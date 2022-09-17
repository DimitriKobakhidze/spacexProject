import React from "react";
import MissionItmes from "./Components/MissionItems";


function App() {
  const [spaceData,setSpaceData] = React.useState()

  const queryFilter = `
  {
    launchesPast(limit: 16) {
      id
      mission_name
      launch_date_local
      launch_success
      links {
        flickr_images
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            land_success
            reused
          }
        }
        rocket {
          engines {
            number
            type
          }
          height {
            meters
          }
        }
      }
    }
  }
  `

  React.useEffect(() => {
    fetch(`https://api.spacex.land/graphql/`,{
      method: "POST",
      headers: { "Content-Type" : "application/json"},
      body: JSON.stringify({ query: queryFilter})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.data.launchesPast)
      setSpaceData(data.data.launchesPast)
    })
  },[])

  return(
    <div className="app">
      {spaceData && <MissionItmes spaceData={spaceData} />}
    </div>
  )

}

export default App;
