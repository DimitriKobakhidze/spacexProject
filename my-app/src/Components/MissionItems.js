




export default function MissionItmes(props){

    const elementsArray = props.spaceData.map(item => {
        return(
          <div className="item-div" style={{marginBottom:"15px"}}>
            <img src={(item.links.flickr_images[0] && item.links.flickr_images[0]) || "https://cdn.vox-cdn.com/thumbor/aHXO6jv95xIgZPboFI8oJGvXQR4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/8592199/531752474.jpg"} alt="Rocket.image" className="item-pic" onClick={() => window.open(`${item.links.video_link},"_blank"`)}></img>
            <h5>(Click Image For Video)</h5>
            <div className="item-text-div">
                <h3 className="mobile-class">Misson name: <span>{item.mission_name}</span></h3>
                <h3>Misson ID: <span>{item.id}</span></h3>
                <h3 className="mobile-class">Launch Date: <span>{item.launch_date_local}</span></h3>
                <h3>Launch Success: <span>{`${item.launch_success}`}</span></h3>
                <h3>Land Success: <span>{`${item.rocket.first_stage.cores[0].land_success}`}</span></h3>
                <h3>Reused: <span>{`${item.rocket.first_stage.cores[0].reused}`}</span></h3>
                <h3>Rocket name: <span>{item.rocket.rocket_name}</span></h3>
                <h3>Height: <span>{item.rocket.rocket.height.meters} meters</span></h3>
                <h3>Engines: <span>{item.rocket.rocket.engines.number}</span></h3>
                <h3>Engines Type: <span>{item.rocket.rocket.engines.type}</span></h3>
            </div>
          </div>
        )
      })

    return(
        <div className="items-main-div">
            {elementsArray}
        </div>
    )
}