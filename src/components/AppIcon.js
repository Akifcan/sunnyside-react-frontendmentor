function AppIcon(props) {
    return (
        <img className="icon" src={require(`../images/${props.icon}`).default} alt={props.icon.split('.')[0]} />
    )
}

export default AppIcon