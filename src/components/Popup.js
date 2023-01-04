const Popup = (props) => {
    return(props.trigger) ? (
        <div className="popup" onClick={() => props.setTrigger(false)}>
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