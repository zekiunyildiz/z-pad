import { render } from "react-dom";

function Main() {
    return(
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" autoFocus/>
                <textarea id="body" placeholder="Write your note here..." />
            </div>
            <div className="app-main-note-preview" >
                <h1>TITLE</h1>
                <div className="markdown-preview">Note preview</div>
            </div>
        </div>
    )
}

export default Main;