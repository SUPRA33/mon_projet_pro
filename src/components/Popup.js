const Popup = (props) => {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup_inner">
                <button className="close_btn" onClick={() => props.setTrigger(false)}>
                    <i class="fa-regular fa-circle-xmark fa-2x"></i>
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;