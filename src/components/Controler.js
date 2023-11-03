import { Component } from "react";

export default class Controler extends Component {

  render() {
    return (
      <div className="controller" id="control">

        {/* menu button */}
        <button className="color" onClick={this.props.callMenu} style={{top:"24px",fontWeight:"600",fontSize:"19px",border:"none"}}>MENU</button>

        {/* forward svg tag */}
        <svg id="forward" xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{right:"22px"}} className="bi bi-skip-forward-fill color" viewBox="0 0 16 16">
  <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z"/>
</svg>

{/* backward svg tag */}
<svg  id="backward" xmlns="http://www.w3.org/2000/svg" style={{left:"22px"}} fill="currentColor" className="bi bi-skip-backward-fill color" viewBox="0 0 16 16">
  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
</svg>

{/* pause and play tag */}
<span className="color" id="pause" style={{bottom:"22px"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
</svg>
</span>

{/* circular button at middle*/}
        <div className="division-button" id="division-button" ></div>
      </div>
    );
  }
}


