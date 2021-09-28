function FlavorZone({flavorSaver}){
    
    
    
    return (
        flavorSaver.map(flavor => <span id = {flavor} onClick = {() => console.log()}><em>| {flavor} |</em></span> )
    )
}

export default FlavorZone